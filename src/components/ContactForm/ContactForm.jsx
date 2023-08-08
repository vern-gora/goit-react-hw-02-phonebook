import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (
      this.props.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact name already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    this.setState({
      contacts: [...this.props.contacts, newContact],
    });
  };

  handleFormSubmit = event => {
    this.handleSubmit(event);
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label className={css.lable}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={css.lable}>
          Phone number
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className={css.btn}>
          Add Contact
        </button>
      </form>
    );
  }
}

// const ContactForm = ({
//   handleNameChange,
//   handleNumberChange,
//   handleSubmit,
// }) => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleNameInputChange = event => {
//     setName(event.target.value);
//     handleNameChange(event);
//   };

//   const handleNumberInputChange = event => {
//     setNumber(event.target.value);
//     handleNumberChange(event);
//   };

//   const handleFormSubmit = event => {
//     handleSubmit(event);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <label className={css.lable}>
//         Name
//         <input
//           className={css.input}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//           value={name}
//           onChange={handleNameInputChange}
//         />
//       </label>
//       <label className={css.lable}>
//         Phone number
//         <input
//           className={css.input}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//           value={number}
//           onChange={handleNumberInputChange}
//         />
//       </label>
//       <button type="submit" className={css.btn}>
//         Add Contact
//       </button>
//     </form>
//   );
// };

ContactForm.propTypes = {
  // handleNameChange: PropTypes.func.isRequired,
  // handleNumberChange: PropTypes.func.isRequired,
  // handleSubmit: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactForm;
