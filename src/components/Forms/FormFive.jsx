import React, { useState } from "react";
import { Button } from "../";

const FormFive = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formHandle = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message.");
    }
  };

  return (
    <form onSubmit={formHandle} className="vs-contact-form">
      <div className="row gx-20">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-12 form-group">
          <select
            name="subject"
            onChange={handleChange}
            value={formData.subject}
          >
            <option value="">Select subject</option>
            <option value="Web Development">Web Development</option>
            <option value="UI Design">UI Design</option>
            <option value="CMS Development">CMS Development</option>
            <option value="Theme Development">Theme Development</option>
            <option value="Wordpress Development">Wordpress Development</option>
          </select>
        </div>
        <div className="col-12 form-group">
          <textarea
            name="message"
            placeholder="Type Your Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="col-12">
          <Button type="submit">Submit Message</Button>
        </div>
        {status && <p>{status}</p>}
      </div>
    </form>
  );
};

export default FormFive;
