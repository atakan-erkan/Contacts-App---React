import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

function Form({ setContacts, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      alert("Lütfen Formu Doldurunuz.");
      return false;
    }
    setContacts([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="inputForm">
        <input
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
