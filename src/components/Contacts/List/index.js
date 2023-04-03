import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const changeFilter = (e) => {
    setFilterText(e.target.value);
  };
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLowerCase());
    });
  });
  return (
    <div>
      <input
        placeholder="🔍Search"
        value={filterText}
        onChange={changeFilter}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <a href={i}>{contact.fullname}</a>
          </li>
        ))}
      </ul>
      <p className="total">{filtered.length} Contacts</p>
    </div>
  );
}

export default List;
