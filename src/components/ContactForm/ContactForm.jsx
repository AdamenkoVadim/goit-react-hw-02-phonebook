import React from "react";
import css from './ContactForm.module.css';

export class ContactForm extends React.Component {
    state = {
        name: ''
      }
    
    hendleInputChange = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({[name]:value});
    } 
    hendleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: '' });
      };

    render (){
        return (
        <>
        <form className={css.contactForm} onSubmit={this.hendleSubmit}>
            <label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={this.state.name}
                    onChange={this.hendleInputChange}
                />
            </label>
            <label>
                <input
                    type="tel"
                    name="number"
                    placeholder="Number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={this.state.number}
                    onChange={this.handleInput}
                />
                </label>
            <button type ="submit">Add contact</button>
        </form>
            
        </>
    )};
}