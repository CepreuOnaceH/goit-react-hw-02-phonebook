import React, { Component } from 'react';
import Notiflix from 'notiflix';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const isExist = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExist) {
      Notiflix.Notify.failure(`${name} is allready exist in your phone list!`);
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <form
          onSubmit={this.handleSubmit}
          style={{
            width: '250px',
            display: 'flex',
            gap: '20px',
            flexDirection: 'column',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleNumberChange}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default ContactForm;
