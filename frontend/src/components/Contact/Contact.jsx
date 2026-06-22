import { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    message: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Please wait...");

    try {
      const response = await fetch("http://localhost:5000/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data?.message || "Unable to submit lead.");
        return;
      }

      setMessage("Lead submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        source: "",
        message: "",
      });
    } catch (error) {
      setMessage("Unable to connect to the server.");
      console.log(error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-tag">CONTACT US</p>

          <h2>Let's Grow Your Business Together</h2>

          <p>
            Have a question or want to know more about our CRM? Fill out the
            form below and we'll get back to you soon.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <select name="source" value={formData.source} onChange={handleChange}>
            <option value="">Lead Source</option>
            <option>Website</option>
            <option>LinkedIn</option>
            <option>Instagram</option>
            <option>Referral</option>
            <option>Google Search</option>
          </select>

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your requirements..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          {message ? <p className="contact-message">{message}</p> : null}

          <button type="submit">Submit Lead</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
