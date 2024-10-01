import Contact from "../Contact/Contact"

export default function ContactList( {contact , onDelete }) {
    return (
      <ul>
        {contact.map((contacts)=>(
          <li key={contacts.id} >
            <Contact data={contacts} onDelete={onDelete} />
          </li>
        ))}
      </ul>    
     )
   }