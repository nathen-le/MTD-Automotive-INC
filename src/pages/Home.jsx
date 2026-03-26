import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [currentReview, setCurrentReview] = useState(0);

  const numReviewPages = Math.ceil(data.reviews.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % numReviewPages);
    }, 8000);
    return () => clearInterval(timer);
  }, [numReviewPages]);

  return (
    <div className="page-wrapper">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            {/* Removed badge */}
            <h1>Expert Auto Repair You Can <span>Trust.</span></h1>
            <p>We provide full-service automotive repair and maintenance with certified technicians and state-of-the-art diagnostic equipment. Your car is in the best hands.</p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-primary pulse-glow">
                <Car size={20} />
                View Services
              </Link>
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
            <form onSubmit={(e) => { e.preventDefault(); alert('Booking request sent! (Visual Demo)'); }}>
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
            Experienced Technicians
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
            Honest & Reliable Service
          </div>
        </div>
      </div>



      <section className="reviews-section">
        <div className="container">
          <div className="section-header">
            <div className="badge">Testimonials</div>
            <h2>What Our Clients Say</h2>
          </div>
          <div className="reviews-slider-container wide">
            <div className="reviews-grid-slider" key={currentReview}>
              {data.reviews.slice(currentReview * 3, currentReview * 3 + 3).map(review => (
                <div key={review.id} className="review-card slider-card">
                  <div className="stars">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="var(--color-primary)" color="var(--color-primary)"/>)}
                  </div>
                  <p>"{review.text}"</p>
                  <div className="review-author">- {review.author}</div>
                </div>
              ))}
            </div>
            <div className="slider-dots">
              {Array.from({ length: numReviewPages }).map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${currentReview === idx ? 'active' : ''}`}
                  onClick={() => setCurrentReview(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
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
