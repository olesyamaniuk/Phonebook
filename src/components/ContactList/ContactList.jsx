import Contact from "../Contact/Contact"
import css from "./ContactList.module.css";

export default function ContactList( {contact , onDelete }) {
    return (
      <ul className={css.contactList}>
        {contact.map((contacts) => (
          <li key={contacts.id} className={css.contactItem}>
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>   
     )
   }