import React from 'react';
import Form from './Form/Form';

export class App extends React.Component {
  state = {
    contacts: 'con',
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <p>{this.state.name}</p>
      </section>
    );
  }
}
