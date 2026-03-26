import React from 'react';
import data from '../data.json';
import { Quote } from 'lucide-react';

export default function About() {
  return (
    <div className="page-wrapper pt-24">
      <section className="about-section" style={{ minHeight: 'calc(100vh - 400px)', display: 'flex', alignItems: 'center' }}>
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
    </div>
  );
}
