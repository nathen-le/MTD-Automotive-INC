import React, { useState } from 'react';
import { 
  CalendarCheck, 
  ChevronRight, 
  Star, 
  Car, 
  CheckCircle2,
  Quote,
  Plus,
  Minus
} from 'lucide-react';
import data from '../data.json';

export default function Home() {
  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="badge">⭐ Premium Auto Care</div>
            <h1>Expert Auto Repair You Can <span>Trust.</span></h1>
            <p>We provide full-service automotive repair and maintenance with certified technicians and state-of-the-art diagnostic equipment. Your car is in the best hands.</p>
            <div className="hero-buttons">
              <button className="btn btn-primary pulse-glow">
                <CalendarCheck size={20} />
                Schedule Service
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h4>34+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>100%</h4>
                <p>Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="quick-booking">
            <h3>Request an Appointment</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" className="form-control" placeholder="(555) 000-0000" />
              </div>
              <div className="form-group">
                <label>Service Needed</label>
                <select className="form-control">
                  {data.services.map(s => <option key={s.id}>{s.title}</option>)}
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Confirm Request <ChevronRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="features-band">
        <div className="container">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <CheckCircle2 size={24} />
            </div>
            ASE Certified Mechanics
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Car size={24} />
            </div>
            All Makes & Models
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Star size={24} />
            </div>
            12-Month Guarantee
          </div>
        </div>
      </div>

      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2000&auto=format&fit=crop" alt="Mechanic at work" />
            </div>
            <div className="about-content">
              <div className="badge">About Us</div>
              <h2>A Legacy of Quality Service</h2>
              <blockquote>
                <Quote size={48} className="quote-icon" />
                <p>"{data.about.text}"</p>
                <footer>
                  <strong>{data.about.owner}</strong>
                  <span>{data.about.title}</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Shop</div>
            <h2>Facility Gallery</h2>
            <p>Take a look at our state-of-the-art facility and our team in action.</p>
          </div>
          <div className="gallery-grid">
            {data.gallery.map(img => (
              <div key={img.id} className="gallery-item">
                <img src={img.src} alt={img.alt} />
                <div className="gallery-overlay">
                  <span>{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Testimonials</div>
            <h2>What Our Client Say</h2>
          </div>
          <div className="reviews-grid">
            {data.reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="stars">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="var(--color-primary)" color="var(--color-primary)"/>)}
                </div>
                <p>"{review.text}"</p>
                <div className="review-author">- {review.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <div className="badge">FAQ</div>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {data.faq.map((item, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${activeFaq === idx ? 'active' : ''}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="faq-question">
                  <h3>{item.question}</h3>
                  {activeFaq === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
