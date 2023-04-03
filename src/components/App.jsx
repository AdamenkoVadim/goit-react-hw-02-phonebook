import React from "react";
import { ContactForm } from 'components/ContactForm/ContactForm'

export class App extends React.Component {
  render(){
    return(
      <section>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>    
      </section>
    )
  }
}
