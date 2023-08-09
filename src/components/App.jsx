import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactItem from './ContactItem';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // handleNameChange = evt => {
  //   this.setState({ name: evt.target.value });
  // };

  // handleNumberChange = evt => {
  //   this.setState({ number: evt.target.value });
  // };

  handleFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  handleSubmit = event => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === event.name.toLowerCase()
      )
    ) {
      alert('This contact name already exists.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: event.name,
      number: event.number,
    };
    this.setState({
      contacts: [...this.state.contacts, newContact],
    });
  };

  delContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h1>PhoneBook</h1>
        <ContactForm
          // handleNameChange={this.handleNameChange}
          // handleNumberChange={this.handleNumberChange}
          handleSubmit={this.handleSubmit}
          contacts={contacts}
        />
        <h2>Contacts</h2>
        <Filter filter={filter} handleFilterChange={this.handleFilterChange} />
        <ContactList>
          <ContactItem
            contacts={filteredContacts}
            onDeleteContact={this.delContact}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
