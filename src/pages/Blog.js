import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock, FiTag, FiArrowRight } from 'react-icons/fi';
import { blogPosts } from '../data/mockData';
import './Blog.css';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Innovation', 'Circular Economy', 'Materials Science', 'Environmental'];

  const filteredPosts = blogPosts.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Latest <span className="text-accent">Insights</span> in 
              Sustainable Chemistry
            </h1>
            <p className="hero-description">
              Stay informed about the latest trends, innovations, and breakthroughs 
              in sustainable chemistry and green technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="blog-controls">
        <div className="container">
          <div className="controls-wrapper">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
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
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && !searchTerm && (
        <section className="featured-post">
          <div className="container">
            <h2 className="section-title">Featured Article</h2>
            <div className="featured-card">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-overlay">
                  <span className="featured-category">
                    <FiTag /> {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="featured-content">
                <div className="featured-meta">
                  <span className="meta-item">
                    <FiUser /> {featuredPost.author}
                  </span>
                  <span className="meta-item">
                    <FiCalendar /> {featuredPost.date}
                  </span>
                  <span className="meta-item">
                    <FiClock /> {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="featured-title">{featuredPost.title}</h3>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="featured-tags">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${featuredPost.id}`} className="featured-link">
                  Read Full Article <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-results">
            <p>Showing {filteredPosts.length} articles</p>
          </div>
          <div className="blog-grid">
            {regularPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-overlay">
                    <span className="blog-category">
                      <FiTag /> {post.category}
                    </span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="meta-item">
                      <FiUser /> {post.author}
                    </span>
                    <span className="meta-item">
                      <FiCalendar /> {post.date}
                    </span>
                    <span className="meta-item">
                      <FiClock /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="blog-title">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-tags">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More <FiArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter for the latest insights in sustainable chemistry.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;