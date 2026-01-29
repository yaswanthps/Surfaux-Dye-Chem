import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCalendar, FiUser, FiClock, FiTag, FiArrowLeft, FiShare2 } from 'react-icons/fi';
import { blogPosts } from '../data/mockData';
import './BlogPost.css';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const relatedPosts = blogPosts.filter(p => 
    p.id !== parseInt(id) && 
    (p.category === post?.category || p.tags.some(tag => post?.tags.includes(tag)))
  ).slice(0, 3);

  if (!post) {
    return (
      <div className="blog-post">
        <div className="container">
          <div className="not-found">
            <h1>Article Not Found</h1>
            <p>The article you're looking for doesn't exist.</p>
            <Link to="/blog" className="btn btn-primary">
              <FiArrowLeft /> Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-post">
      {/* Back Navigation */}
      <div className="container">
        <div className="back-nav">
          <Link to="/blog" className="back-link">
            <FiArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="article">
        <header className="article-header">
          <div className="container">
            <div className="article-meta">
              <span className="meta-item">
                <FiTag className="meta-icon" />
                {post.category}
              </span>
              <span className="meta-item">
                <FiCalendar className="meta-icon" />
                {post.date}
              </span>
              <span className="meta-item">
                <FiClock className="meta-icon" />
                {post.readTime}
              </span>
            </div>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-author">
              <div className="author-info">
                <FiUser className="author-icon" />
                <span>By {post.author}</span>
              </div>
              <button className="share-btn">
                <FiShare2 /> Share Article
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="article-image">
          <img src={post.image} alt={post.title} />
        </div>

        {/* Article Content */}
        <div className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="article-body">
                <div className="article-excerpt">
                  <p className="excerpt-text">{post.excerpt}</p>
                </div>
                <div 
                  className="article-text"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
              
              {/* Sidebar */}
              <aside className="article-sidebar">
                <div className="sidebar-section">
                  <h3>Tags</h3>
                  <div className="tags-list">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="sidebar-section">
                  <h3>Share This Article</h3>
                  <div className="share-buttons">
                    <button className="share-button linkedin">
                      LinkedIn
                    </button>
                    <button className="share-button twitter">
                      Twitter
                    </button>
                    <button className="share-button facebook">
                      Facebook
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="related-articles">
          <div className="container">
            <h2 className="section-title">Related Articles</h2>
            <div className="related-grid">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="related-card">
                  <div className="related-image">
                    <img src={relatedPost.image} alt={relatedPost.title} />
                  </div>
                  <div className="related-content">
                    <div className="related-meta">
                      <span className="related-category">{relatedPost.category}</span>
                      <span className="related-date">{relatedPost.date}</span>
                    </div>
                    <h3 className="related-title">
                      <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="related-excerpt">{relatedPost.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="newsletter-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Stay Informed</h2>
            <p>Subscribe to our newsletter for more insights like this.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;