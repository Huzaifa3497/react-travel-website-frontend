import React, { useState } from 'react';


function Form1() {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (name.trim() === '') {
      alert('Please enter your name');
      return;
    }

    if (fatherName.trim() === '') {
      alert("Please enter your father's name");
      return;
    }

    if (phone.trim() === '') {
      alert('Please enter your phone number');
      return;
    }

    if (destination.trim() === '') {
      alert('Please enter the destination');
      return;
    }

    if (date.trim() === '') {
      alert('Please enter the date');
      return;
    }

    // Here you can perform any necessary actions with the form data
    // For example, you can send the data to a server or update the state of a parent component
    console.log('Submitted:', { name, fatherName, phone, destination, date });

    // Clear the form fields after submission
    setName('');
    setFatherName('');
    setPhone('');
    setDestination('');
    setDate('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="fatherName">Father's Name:</label>
      <input
        type="text"
        id="fatherName"
        value={fatherName}
        onChange={(e) => setFatherName(e.target.value)}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label htmlFor="destination">Destination:</label>
      <input
        type="text"
        id="destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form1;
