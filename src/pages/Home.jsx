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
  const [tallyKey, setTallyKey] = useState(0);

  const numReviewPages = Math.ceil(data.reviews.length / 3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % numReviewPages);
    }, 8000);
    return () => clearInterval(timer);
  }, [numReviewPages]);

  useEffect(() => {
    const handleMessage = (e) => {
      if (e.data && e.data.event === 'Tally.FormSubmitted') {
        setTimeout(() => setTallyKey(prev => prev + 1), 3000);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

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
            <iframe 
              key={tallyKey}
              src="https://tally.so/embed/jaLvNR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="542" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0" 
              title="Request an Appointment"
            ></iframe>
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
