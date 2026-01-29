import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiSun, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';
import { services, projects, blogPosts, companyStats, testimonials } from '../data/mockData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

const Home = () => {
  const applications = [
    {
      id: 1,
      name: 'Home Textile',
      icon: '🛏️',
      description: 'High-performance, soft-feel finishes for bed linen, towels and home fabrics.'
    },
    {
      id: 2,
      name: 'Sportswear',
      icon: '👕',
      description: 'Moisture-management and durable color solutions for activewear.'
    },
    {
      id: 3,
      name: 'Interior Textile',
      icon: '🛋️',
      description: 'Low-emission, color-stable chemistries for upholstery and interior fabrics.'
    },
    {
      id: 4,
      name: 'Workwear',
      icon: '🧥',
      description: 'Highly durable, high fastness systems for industrial and protective wear.'
    }
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 12000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Sustainable Chemistry for a 
              <span className="text-accent"> Greener Future</span>
            </h1>
            <p className="hero-description">
              Leading the revolution in eco-friendly chemical solutions. Our innovative 
              technologies transform industrial processes while protecting our planet 
              for future generations.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                Explore Solutions <FiArrowRight />
              </Link>
              <Link to="/about" className="btn btn-outline">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=600&fit=crop" 
              alt="Sustainable Chemistry Laboratory"
            />
          </div>
        </div>
      </section>

      {/* Applications Carousel */}
      <section className="applications-section">
        <div className="container">
          <div className="applications-header">
            <h2 className="applications-title">Applications</h2>
          </div>
          <div className="applications-carousel">
            <Slider {...carouselSettings} className="applications-slider">
              {applications.map((app) => (
                <div key={app.id} className="application-slide">
                  <div className="application-card">
                    <div className="application-icon">{app.icon}</div>
                    <h3 className="application-name">{app.name}</h3>
                    <p className="application-description">{app.description}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Projects Section */}
       {/*<section className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Real-world applications of our sustainable chemistry innovations
            </p>
          </div>
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                    <span className="project-status">{project.status}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-impact">{project.impact}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/projects" className="btn btn-primary">
              View All Projects <FiArrowRight />
            </Link>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Partners Say</h2>
            <p className="section-description">
              Trusted by leading companies worldwide
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-position">{testimonial.position}</p>
                    <p className="author-company">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Blog Section */}
      {/* <section className="blog-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Latest Insights</h2>
            <p className="section-description">
              Stay updated with the latest trends in sustainable chemistry
            </p>
          </div>
          <div className="blog-grid">
            {latestPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{post.date}</span>
                    <span className="blog-read-time">{post.readTime}</span>
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    Read More <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/blog" className="btn btn-primary">
              View All Articles <FiArrowRight />
            </Link>
          </div>
        </div>
      </section> */}



    {/* Company Story */}
     {/*} <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Journey</h2>
              <div className="story-timeline">
                <div className="timeline-item">
                  <div className="timeline-year">2009</div>
                  <div className="timeline-content">
                    <h4>Foundation</h4>
                    <p> SurfauxDyeChem was founded with a vision to revolutionize the chemical industry through sustainable innovation.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2012</div>
                  <div className="timeline-content">
                    <h4>First Breakthrough</h4>
                    <p>Developed our first bio-based chemical process, reducing environmental impact by 70%.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2015</div>
                  <div className="timeline-content">
                    <h4>Global Expansion</h4>
                    <p>Opened international operations and established partnerships with leading companies worldwide.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2020</div>
                  <div className="timeline-content">
                    <h4>Circular Economy Focus</h4>
                    <p>Launched our circular economy initiative, helping companies achieve zero waste to landfill.</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-year">2024</div>
                  <div className="timeline-content">
                    <h4>Carbon Neutral Operations</h4>
                    <p>Achieved carbon neutrality across all operations and launched our first carbon-negative products.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop" 
                alt="Our Company History"
              />
            </div>
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Go Green?</h2>
            <p className="cta-description">
              Join the sustainable chemistry revolution and transform your business 
              for a better tomorrow.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">
                Get Started Today <FiArrowRight />
              </Link>
              <Link to="/services" className="btn btn-outline">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>


            <section className="success-stories">
        <div className="container">
          <h2 className="section-title">Garment Manufacturers: Facing Challenges, Finding Solutions</h2>
          <div className="stories-grid">
            <div className="story-card">
              <div className="story-number">01</div>
              <h3>Challenges</h3>
              <p>
                Garment manufacturers are facing shrinking margins, rising operational costs, and increasing quality pressures, making material cost optimization essential.

ReactEvo® enables significant savings by reducing fabric weight loss and dyeing costs while improving overall processing efficiency.
              </p>
            </div>
            <div className="story-card">
              <div className="story-number">02</div>
              <h3>Solutions</h3>
              <p>
                The process lowers peak processing temperature from 98°C to 80°C and avoids harsh bleaching chemicals, preserving fiber strength and fabric integrity.

Fabrics retain natural shine, comfort, and durability while supporting sustainability goals and reducing environmental impact.
              </p>
            </div>
            <div className="story-card">
              <div className="story-number">03</div>
              <h3>Results</h3>
              <p>
                All auxiliaries used are biodegradable and environmentally safe, aligning with ZLD and eco-compliance standards.

ReactEvo TWE Conc ensures strong dye–fiber bonding and excellent fastness, and the solution integrates smoothly into existing workflows with expert implementation support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;