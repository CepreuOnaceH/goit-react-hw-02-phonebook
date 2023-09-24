import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class Phonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}
        >
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contatcs</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Phonebook;
