import Title from '../components/Title';
import styles from '../components/Title/Title.module.css';

const HomeView = () => (
  <div className={styles.homeContainer}>
    <Title title="Your IT-Phonebook" />
  </div>
);

export default HomeView;
