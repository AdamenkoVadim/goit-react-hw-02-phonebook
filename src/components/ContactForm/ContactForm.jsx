import React from "react";

export class ContactForm extends React.Component {
    state = {
        contacts: [],
        name: ''
      }

    render (){
        return (
        <>
        <form>
            <label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    equired
                />
            </label>
        </form>
            
        </>
    )};
}