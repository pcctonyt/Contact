import React from "react";

const ListContacts = ({ contacts }) => {
  console.log(contacts);
  let mappedPeople = contacts.map((person) => 
    <li key={person.id}>{person.name}</li>
  )
  return (
    <ol className="contact-list">
        { mappedPeople }
    </ol>
  )
}

export default ListContacts;