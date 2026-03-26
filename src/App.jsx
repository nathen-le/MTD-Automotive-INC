import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Wrench, 
  Phone, 
  MapPin, 
  Clock, 
  Menu,
  MessageCircle,
  Globe,
  Camera,
  X
} from 'lucide-react';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import data from './data.json';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <Wrench className="logo-icon" size={32} />
          MTD Automotive
        </Link>
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
        </ul>
        <div className="nav-actions">
          <div className="contact-info hidden-mobile">
            <Phone size={20} />
            <span>{data.contact.phone}</span>
          </div>
          <a href={`tel:${data.contact.phone.replace(/[^0-9]/g, '')}`} className="btn btn-primary hidden-mobile">Book Now</a>
          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <Wrench className="footer-logo-icon" size={28} />
              {data.companyName}
            </Link>
            <p className="footer-text">
              Providing top-tier automotive repair and maintenance services with a commitment to honesty, integrity, and quality workmanship.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><Globe size={20} /></a>
              <a href="#" className="social-link"><MessageCircle size={20} /></a>
              <a href="#" className="social-link"><Camera size={20} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              {data.services.slice(0, 5).map(s => (
                <li key={s.id}><Link to="/services">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul className="footer-contact">
              <li>
                <MapPin size={24} />
                <a href={data.contact.addressLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                  <span>{data.contact.address}</span>
                </a>
              </li>
              <li>
                <Phone size={20} />
                <span>{data.contact.phone}</span>
              </li>
              <li>
                <Clock size={20} />
                <span>
                  {data.hours[0].day}-{data.hours[4].day}: {data.hours[0].time}
                  <br />
                  Sat-Sun: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {data.companyName} All rights reserved.</p>
          <div className="footer-legal">
            <button onClick={() => setShowPrivacy(true)} style={{ background:'none', border:'none', color:'inherit', cursor:'pointer', marginRight: '1rem', padding: 0, fontFamily: 'inherit' }}>Privacy Policy</button>
            <button onClick={() => setShowTerms(true)} style={{ background:'none', border:'none', color:'inherit', cursor:'pointer', padding: 0, fontFamily: 'inherit' }}>Terms of Service</button>
          </div>
        </div>
      </div>

      {showPrivacy && (
        <div className="modal-backdrop" onClick={() => setShowPrivacy(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            <button className="modal-close" onClick={() => setShowPrivacy(false)}><X size={24} /></button>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Privacy Policy</h2>
            <div style={{ maxHeight: '60vh', overflowY: 'auto', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
               <p>We may collect personal information such as your name, email address, phone number, and vehicle details when you request an appointment or fill out a form on our website.</p>
               <br/>
               <p>Your information is used solely to provide automotive repair services, schedule appointments, and communicate with you regarding your vehicle. We do not sell or rent your personal information to third parties.</p>
               <br/>
               <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.</p>
            </div>
          </div>
        </div>
      )}

      {showTerms && (
        <div className="modal-backdrop" onClick={() => setShowTerms(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ padding: '2.5rem' }}>
            <button className="modal-close" onClick={() => setShowTerms(false)}><X size={24} /></button>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Terms of Service</h2>
            <div style={{ maxHeight: '60vh', overflowY: 'auto', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
               <p>By accessing or using this website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
               <br/>
               <p>MTD Automotive Inc. provides automotive repair, maintenance, and diagnostic services. All estimates provided online or over the phone are subject to an in-person physical inspection of the vehicle.</p>
               <br/>
               <p>We offer a standard warranty on labor and specific parts. Warranty terms are provided in writing at the time of service completion. Some exclusions apply based on parts supplied or prior vehicle conditions.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
