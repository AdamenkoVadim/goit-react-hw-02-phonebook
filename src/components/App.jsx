import React from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm'; 

export class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }
  addContact =({name,number}) => [
    
  ]

  changeFilter = (event) => {
    this.setState({ filter:event.currentTarget.value })
  };


  render() {
   /*  const contactName = Object.keys(this.state.contacts);
    const contactNumber = Object.values(this.state.contacts) */ 
    return (
      <section>
        <h1>Phonebook</h1>
        <ContactForm/>
        
        <h2>Contacts</h2>
            <label>Find contacts by name
              <input
                type="text"
                placeholder="Find contacts by name"
                value = {this.state.filter}
                onChange={this.changeFilter}
              ></input>
            </label>
        <ContactList 
       contacts = {this.state.contacts}
       
       />
      </section>
    );
  }
}
