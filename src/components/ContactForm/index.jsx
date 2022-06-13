import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    if (!form.Nombre || !form.Correo || !form.Message) {
      return setError(true);
    } else {
      emailjs
        .sendForm(
          "service_jnrk4lg",
          "template_fi0ulv7",
          event.target,
          "G7yYsmzD618XE2BV3",
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
      document.querySelector(".form-container").reset();
    }
  };
  return (
    <form action="" className="form-container" onSubmit={onHandleSubmit}>
      <h2 className="">contact me</h2>
      <section>
        <input
          className="kosalsay"
          type="text"
          placeholder="Name"
          name="Nombre"
          onChange={handleChange}
        />
        <input
          className="kosalsay"
          type="email"
          placeholder="Email"
          name="Correo"
          onChange={handleChange}
        />
      </section>
      <textarea
        name="Message"
        id=""
        className="kosalsay"
        placeholder="Message"
        onChange={handleChange}
      />
      <button className="kosalsay" type="submit">
        Send
      </button>
      <p className="kosalsay" style={{ display: error && "block" }}>
        All the field are require
      </p>
    </form>
  );
};

export default ContactForm;
