import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...STATE };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ ...STATE });
  };

  render() {
    const { name, number } = this.state;
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
            value={name}
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
            value={number}
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
