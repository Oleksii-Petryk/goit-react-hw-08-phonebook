import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({ title }) {
  return <h1 className={styles.title}>{title}</h1>;
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
