import React from 'react';
import { Form, redirect } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <Form method="post">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" required />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default Contact;
