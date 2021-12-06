import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContact,
  getIsLoading,
} from '../../redux/redux-phonebook/phonebook-selectors';
import { addContacts } from '../../redux/redux-phonebook/phonebook-operations';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { toast } from 'react-toastify';
import LoadBox from '../Loader/Loader';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();
  const data = useSelector(getContact);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(data);
  }, [data]);

  const findContact = () => {
    return contacts.find(contact => contact.name === name);
  };

  const handleChange = e => {
    const { value } = e.currentTarget;

    switch (e.currentTarget.name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (findContact()) {
      toast.error(name + ' is already in contacts');
      reset();
      return;
    }

    dispatch(addContacts({ name: name, number: number }));
    toast.success(name + 'added successfully to address book', {
      autoClose: 2000,
    });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
          autoComplete="off"
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
          autoComplete="off"
        />
      </label>
      <button type="submit" className={styles.button} disabled={isLoading}>
        Add contact
        {isLoading && <LoadBox />}
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;
