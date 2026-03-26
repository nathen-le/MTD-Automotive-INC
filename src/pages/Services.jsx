import React from 'react';
import data from '../data.json';
import { 
  Car, 
  Settings, 
  Gauge, 
  BatteryCharging, 
  Wrench, 
  CheckCircle2,
  ChevronRight
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
                <p>{service.description}</p>
                <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
