import React, { Component } from 'react';
import { nanoid } from 'nanoid';
class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };
  handleFilterChange = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form
          onSubmit={this.handleSubmit}
          style={{
            width: '250px',
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
          }}
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
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
          <input
            type="text"
            name="filter"
            placeholder="Start to tape your contact`s name"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contatcs</h2>
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(this.state.filter)
            )
            .map(contact => (
              <li key={contact.id}>
                {contact.name}: {contact.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default Phonebook;
