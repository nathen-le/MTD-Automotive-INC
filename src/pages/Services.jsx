import React, { useState } from 'react';
import data from '../data.json';
import { 
  Car, 
  Settings, 
  Gauge, 
  BatteryCharging, 
  Wrench, 
  CheckCircle2,
  ChevronRight,
  X
} from 'lucide-react';

const iconMap = {
  Car: <Car size={32} />,
  Settings: <Settings size={32} />,
  Gauge: <Gauge size={32} />,
  BatteryCharging: <BatteryCharging size={32} />,
  Wrench: <Wrench size={32} />,
  CheckCircle2: <CheckCircle2 size={32} />
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => setSelectedService(null);

  return (
    <div className="page-wrapper pt-24">
      <section className="services">
        <div className="container">
          <div className="section-header">
            <div className="badge">Our Services</div>
            <h2>Comprehensive Auto Solutions</h2>
            <p>From routine maintenance to complex engine repairs, we have the expertise to keep your vehicle running smoothly and safely on the road.</p>
          </div>
          <div className="services-grid">
            {data.services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  {iconMap[service.icon]}
                </div>
                <h3>{service.title}</h3>
                <p className="price-tag"><strong>Est. Price Range:</strong> {service.priceRange}</p>
                <p>{service.description}</p>
                <button 
                  className="service-link" 
                  onClick={() => setSelectedService(service)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  Learn more <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {selectedService && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><X size={24} /></button>
            {selectedService.image && (
              <div className="modal-image">
                <img src={selectedService.image} alt={selectedService.title} />
              </div>
            )}
            <div className="modal-body">
              <div className="modal-header">
                <div className="modal-icon">{iconMap[selectedService.icon]}</div>
                <h2>{selectedService.title}</h2>
              </div>
              <div className="modal-price">Typical Range: <span>{selectedService.priceRange}</span></div>
              
              <h3>Overview</h3>
              <p>{selectedService.detailedDescription}</p>

              <h3>What to Bring / Required</h3>
              <ul>
                {selectedService.requiredItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 style={{ marginTop: '1.5rem' }}>Pricing Explanation</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{selectedService.pricingExplanation}</p>
              
              <button className="btn btn-primary" style={{ marginTop: '2.5rem', width: '100%' }} onClick={closeModal}>Got it</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
