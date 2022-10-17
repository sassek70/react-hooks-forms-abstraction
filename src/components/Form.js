import React, { useState } from "react";

function Form() {
  //set values into one object in state instead of each value having its own state
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false,
  });

  // function handleFirstNameChange(event) {
  //   setFormData({

  //     // formData is an object, so we need to copy all the key/value pairs
  //     ...formData,

  //     // we want to overwrite the firstName key with a new value
  //     firstName: event.target.value,
  //   });
  // }

  // function handleLastNameChange(event) {
  //   setFormData({

  //     // formData is an object, so we need to copy all the key/value pairs
  //     ...formData,

  //     // we want to overwrite the laststName key with a new value
  //     lastName: event.target.value,
  //   });
  // }

// -----------Condense change handlers into one function---------------

  function handleChange(event) {
    // name is teh KEY in the formData object we're trying to update
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value
    });

    // use `checked` property of the checkboxes instead of `value`
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }


  }

  return (
    <form>
      <input type="text" name="firstName" onChange={handleChange} value={formData.firstName} />
      <input type="text" name="lastName" onChange={handleChange} value={formData.lastName} />
      <input type="checkbox" name="admin" onChange={handleChange} value={formData.admin}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
