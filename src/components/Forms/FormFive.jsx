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
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Update form data state on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit form data to serverless function
  const formHandle = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null); // Clear previous status message

    const endpoint = "https://nexatech-server.onrender.com/submit";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form fields
        setShowModal(true); // Show modal on success
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  // Close modal
  const closeModal = () => setShowModal(false);

  return (
    <>
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
              <option value="Wordpress Development">
                Wordpress Development
              </option>
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
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Submit Message"}
            </Button>
          </div>
          {status && <p>{status}</p>}
        </div>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Message Sent Successfully!</h2>
            <p>We will be in touch soon.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Modal styles */}
      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          width: fit-content; /* Make modal fit its content */
          max-width: 90%; /* Limit width on smaller screens */
          box-sizing: border-box;
        }
        .modal-content h2 {
          margin-bottom: 10px;
        }
        .modal-content button {
          margin-top: 20px;
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .modal-content button:hover {
          background: #0056b3;
        }
      `}</style>
    </>
  );
};

export default FormFive;
