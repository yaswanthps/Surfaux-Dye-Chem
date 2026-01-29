import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Get in <span className="text-accent">Touch</span>
            </h1>
            <p className="hero-description">
              Ready to transform your business with sustainable chemistry solutions? 
              We'd love to hear from you and discuss how we can help achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2 className="form-title">Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <FiUser className="label-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <FiMail className="label-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="consultation">Free Consultation</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare className="label-icon" />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>

                {submitMessage && (
                  <div className="submit-message">
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <h2 className="info-title">Contact Information</h2>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FiMapPin />
                </div>
                <div className="contact-details">
                  <h3>Visit Us</h3>
                  <p>
                    Surfaux Dye Chem
Plot No.18,19, Moraji Desai Nagar,<br/>
Chettipalayam, Gandhi Nagar Post,<br/>
Tirupur - 641603

                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiPhone />
                </div>
                <div className="contact-details">
                  <h3>Call Us</h3>
                  <p>
                    +91 93444 53519<br/> +91 82482 75265
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <h3>Email Us</h3>
                  <p>
                    General: erca@sufaux.com<br />
                    Sales: erca@sufaux.com<br />
                    Support: erca@sufaux.com
                  </p>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <h2 className="section-title">Find Us</h2>
          <div className="map-placeholder">
            <img 
              src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=400&fit=crop" 
              alt="Office Location Map"
              className="map-image"
            />
            <div className="map-overlay">
              <div className="map-info">
                <h3> SurfauxDyeChemHeadquarters</h3>
                <p>
Plot No.18,19, Moraji Desai Nagar,
Chettipalayam, Gandhi Nagar Post,
Tirupur - 641603
</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;