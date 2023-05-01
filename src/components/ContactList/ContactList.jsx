import { nanoid } from 'nanoid';

export const ContactList =({contacts})=>{
    return(
      <div>{contacts.map(({name,number}) =>{
        return(
        <li key={nanoid()}>
          {name}:{number}
          <button
          type="button"
          >dell
          </button>
        </li>
      )})}
      </div>
    )
}