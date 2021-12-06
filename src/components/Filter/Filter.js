import React from 'react';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/redux-phonebook/phonebook-actions';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({ onChange }) {
  const changeFilter = e => {
    const filterValue = e.currentTarget.value;
    onChange(filterValue);
  };

  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={changeFilter}
        autoComplete="off"
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onChange: filterValue => dispatch(changeFilter(filterValue)),
});

export default connect(null, mapDispatchToProps)(Filter);
