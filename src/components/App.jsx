import React from "react";
import { ContactForm } from 'components/ContactForm/ContactForm'
import { ContactList } from "./ContactList/ContactList";

export class App extends React.Component {

  state = {
    contacts: [],
  }
  
  formSubmitHandler =({name}) => {
    const contact = {
      name,
    }
    this.setState(({contacts}) => {
      return {contacts: [contact, ...contacts],};
    });
  };
  
  
  render(){
    return(
      <section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler}/>
        <h2>Contacts</h2>
        <ContactList/>  
      </section>
    )
  }
}
