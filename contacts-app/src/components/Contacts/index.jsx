import { useState, useEffect } from "react";
import "./style.css";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "John",
      phone: "123890",
    },
    {
      fullname: "John Smith",
      phone: "123456",
    },
    {
      fullname: "Smith",
      phone: "1990",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
