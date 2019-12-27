import React, { useState } from "react";

// Custom Inputs
import CustomInput from "./components/CustomInput";
import CustomLabel from "./components/CustomLabel";
import CustomButton from "./components/CustomButton";

import "./App.css";

function App() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  function handleValueChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function onSubmut(event) {
    event.preventDefault();
    window.alert(
      `You submitted the following user

      Name: ${form.firstName} ${form.lastName}
      Email: ${form.email}
      `
    );
    setForm({ firstName: "", lastName: "", email: "" });
  }

  return (
    <div className="App">
      <div>
        <form className="form-container" onSubmit={onSubmut}>
          <CustomLabel htmlFor="userFirstName">First Name</CustomLabel>
          <CustomInput
            id="userFirstName"
            name="firstName"
            value={form.firstName}
            onChange={handleValueChange}
          />

          <CustomLabel htmlFor="userLastName">Last Name</CustomLabel>
          <CustomInput
            id="userLastName"
            name="lastName"
            value={form.lastName}
            onChange={handleValueChange}
          />

          <CustomLabel htmlFor="userEmail">Email</CustomLabel>
          <CustomInput
            id="userEmail"
            name="email"
            value={form.email}
            onChange={handleValueChange}
          />

          <CustomButton type="submit">Submit</CustomButton>
        </form>
      </div>
    </div>
  );
}

export default App;
