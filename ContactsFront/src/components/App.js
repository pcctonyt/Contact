import "../css/App.css";
import React from "react";
import ListContacts from "./ListContacts";

const App = () => {

  const contacts = [
  {
    id: "karen",
    name: "Karen Isgrigg",
    handle: "karen_isgrigg",
    avatarURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "richard",
    name: "Richard Kalehoff",
    handle: "richardkalehoff",
    avatarURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "tyler",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    avatarURL: "http://localhost:5001/tyler.jpg",
  },
];
  


  return (
    <div>
        <h1>Contacts App</h1>
        <ListContacts contacts={contacts} />
    </div>
  );
};

export default App;
