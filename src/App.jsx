import React, { useState, useEffect } from 'react';
import { 
  Wrench, 
  Settings, 
  Car, 
  Phone, 
  CalendarCheck, 
  ChevronRight, 
  Star, 
  MapPin, 
  Clock, 
  Menu,
  CheckCircle2,
  BatteryCharging,
  Gauge,
  MessageCircle,
  Globe,
  Camera
} from 'lucide-react';
import './index.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <Wrench className="logo-icon" size={32} />
            MTD Automotive
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#testimonials">Reviews</a></li>
          </ul>
          <div className="nav-actions">
            <div className="contact-info">
              <Phone size={20} />
              <span>(555) 123-4567</span>
            </div>
            <button className="btn btn-primary">Book Now</button>
            <button 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
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
              <button className="btn btn-outline">
                View Services
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <h4>15+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h4>5k+</h4>
                <p>Happy Clients</p>
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
                  <option>Oil Change</option>
                  <option>Brake Service</option>
                  <option>Engine Diagnostics</option>
                  <option>General Maintenance</option>
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

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Services</div>
            <h2>Comprehensive Auto Solutions</h2>
            <p>From routine maintenance to complex engine repairs, we have the expertise to keep your vehicle running smoothly and safely on the road.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Car size={32} />
              </div>
              <h3>General Maintenance</h3>
              <p>Regular check-ups, oil changes, fluid flushes, and filter replacements to extend your vehicle's lifespan.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Gauge size={32} />
              </div>
              <h3>Engine Diagnostics</h3>
              <p>Advanced computer diagnostics to quickly and accurately identify any engine or electrical issues.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Settings size={32} />
              </div>
              <h3>Brake Services</h3>
              <p>Complete brake system inspection, pad replacement, rotor resurfacing, and fluid services.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <BatteryCharging size={32} />
              </div>
              <h3>Electrical Systems</h3>
              <p>Battery testing, alternator repair, starter replacement, and complete electrical system diagnosis.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <Wrench size={32} />
              </div>
              <h3>Transmission Repair</h3>
              <p>Expert transmission servicing, slipping gears repair, fluid changes, and total rebuilds.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <CheckCircle2 size={32} />
              </div>
              <h3>A/C & Heating</h3>
              <p>Climate control system inspections, refrigerant recharges, leak detection, and compressor repair.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <Wrench className="footer-logo-icon" size={28} />
                MTD Auto
              </div>
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
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#appointments">Appointments</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <ul className="footer-links">
                <li><a href="#">Oil & Filter Change</a></li>
                <li><a href="#">Brake Repair</a></li>
                <li><a href="#">Engine Diagnostics</a></li>
                <li><a href="#">Tire Services</a></li>
                <li><a href="#">Transmission Service</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Info</h4>
              <ul className="footer-contact">
                <li>
                  <MapPin size={20} />
                  <span>1234 Repair Lane<br />Automotive City, ST 12345</span>
                </li>
                <li>
                  <Phone size={20} />
                  <span>(555) 123-4567<br />(555) 987-6543</span>
                </li>
                <li>
                  <Clock size={20} />
                  <span>Mon-Fri: 8am - 6pm<br />Sat: 9am - 2pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} MTD Automotive Inc. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#" style={{ marginRight: '1rem' }}>Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
