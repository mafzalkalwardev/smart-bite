import React, { useState } from "react";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://formsubmit.co/ajax/kalwarmuhammadafzal@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message
        })
      }
    );

    if (response.ok) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container py-5 text-light">
      <h2 className="fw-bold text-center mb-4">Contact Us</h2>

      <div className="row mb-5">
        {/* CONTACT INFO */}
        <div className="col-md-6">
          <h5>📞 Phone</h5>
          <p>+92 307 9670503</p>

          <h5>💬 WhatsApp</h5>
          <a
            href="https://wa.me/923079670503"
            target="_blank"
            rel="noreferrer"
            className="text-success"
          >
            Chat on WhatsApp
          </a>

          <h5 className="mt-3">📧 Email</h5>
          <p>kalwarmuhammadafzal@gmail.com</p>

          <h5 className="mt-3">📍 Address</h5>
          <p>
            Air University Islamabad<br />
            E-9 Campus, Islamabad
          </p>
        </div>

        {/* FORM */}
        <div className="col-md-6">
          <h5>💡 Suggestions / Feedback</h5>

          {success && (
            <div className="alert alert-success">
              ✅ Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control mb-3"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control mb-3"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              className="form-control mb-3"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="btn btn-success w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
