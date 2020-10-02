import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  const [displayContact, setDisplayContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setContact((previousValue) => {
      return {
        ...previousValue,
        [name]: value
      };
    });
  }

  function handleClick(event) {
    setDisplayContact(contact);
    //prevent page from relaoding after submitting form values
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {displayContact.fName} {displayContact.lName}
      </h1>
      <p>{displayContact.email}</p>
      <form>
        <input
          onChange={handleOnChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleOnChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleOnChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
}

export default App;
