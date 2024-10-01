import { useState, useEffect } from "react";
import initialContacts from "../contacts.json";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactForm from "../components/ContactForm/ContactForm";

export default function App() {
  const [contact, setContact] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contact));
  }, [contact]);

  const [filter, setFilter] = useState("");

  const addCont = (newCont) => {
    setContact((prevCont) => [...prevCont, newCont]);
  };

  const deleteCont = (contId) => {
    setContact((prevContacts) => prevContacts.filter((contact) => contact.id !== contId));
  };

  const visibleContact = contact.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    if (contact.length === 0) {
      setContact(initialContacts);
    }
  }, []);
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addCont} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contact={visibleContact} onDelete={deleteCont} />
    </div>
  );
}