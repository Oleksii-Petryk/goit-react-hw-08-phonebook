import { deleteContacts } from '../../redux/redux-phonebook/phonebook-operations';
import { useSelector, useDispatch } from 'react-redux';
import { getIsDeleting } from '../../redux/redux-phonebook/phonebook-selectors';
import styles from './ContactsListItem.module.css';

export const ContactsListItem = ({ name, id, number }) => {
  const isDeleting = useSelector(getIsDeleting);
  const dispatch = useDispatch();

  return (
    <li className={styles.contactItem} key={id}>
      <p className={styles.text}>{name}</p>
      <p className={styles.number}>{number}</p>
      <button
        className={styles.button}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
        disabled={isDeleting}
      >
        {isDeleting ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};
