import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { useEffect } from "react";
import "./style.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Atakan Erkan",
      phone_number: "05555554848",
    },
    {
      fullname: "Ali Çınar",
      phone_number: "05555555858",
    },
    {
      fullname: "Çağlar Kılıç",
      phone_number: "05555552020",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <h4>New Contact</h4>
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
