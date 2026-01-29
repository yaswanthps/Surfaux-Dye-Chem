import React, { useState } from 'react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { services } from '../data/mockData';
import './Services.css';

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sustainable Chemistry', 'Green Manufacturing', 'Circular Economy', 'Environmental', 'Bio-Based', 'Clean Technology'];

  const filteredServices = selectedCategory === 'All' 
    ? services 
    : services.filter(service => service.title.includes(selectedCategory));

  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Sustainable Chemistry <span className="text-accent">Solutions</span>
            </h1>
            <p className="hero-description">
              Comprehensive eco-friendly chemical solutions that transform industries 
              while protecting our environment. From green manufacturing to circular 
              economy implementations, we deliver results that matter.
            </p>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop" 
              alt="Chemical Laboratory"
            />
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img src={service.image} alt={service.title} />
                  <div className="service-overlay">
                    <span className="service-icon">{service.icon}</span>
                  </div>
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <FiCheck className="feature-icon" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3 className="step-title">Assessment</h3>
              <p className="step-description">
                We analyze your current processes and identify opportunities 
                for sustainable improvements.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3 className="step-title">Design</h3>
              <p className="step-description">
                Our experts design custom solutions tailored to your specific 
                needs and sustainability goals.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3 className="step-title">Implementation</h3>
              <p className="step-description">
                We work with your team to implement the solutions with 
                minimal disruption to operations.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3 className="step-title">Optimization</h3>
              <p className="step-description">
                Continuous monitoring and optimization ensure maximum 
                efficiency and environmental benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2 className="section-title">Why Choose Our Services?</h2>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">🌱</div>
                  <div>
                    <h4>Environmental Impact</h4>
                    <p>Reduce your carbon footprint by up to 85% while maintaining product quality</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">💰</div>
                  <div>
                    <h4>Cost Savings</h4>
                    <p>Achieve significant cost reductions through improved efficiency and waste reduction</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">📈</div>
                  <div>
                    <h4>Competitive Advantage</h4>
                    <p>Stay ahead of regulations and market demands with sustainable solutions</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🏆</div>
                  <div>
                    <h4>Proven Results</h4>
                    <p>Join 100+ companies that have successfully transformed their operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="benefits-image">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                alt="Sustainable Manufacturing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our sustainable chemistry solutions can help 
              you achieve your environmental and business goals.
            </p>
            <button className="btn btn-primary">
              Get Free Consultation <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;