import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({ contacts, onDeleteContact }) => {
  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p className={css.text}>{name}</p>
          <p className={css.text}>{number}</p>
          <button className={css.btn} onClick={() => onDeleteContact(id)}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
