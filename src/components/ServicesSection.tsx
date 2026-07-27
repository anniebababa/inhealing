import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-card-image-wrap">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="service-card-overlay" />
            </div>
            <div className="service-card-content">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">
                {service.description.split('\n').map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < service.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
              <Link href={`/services/${service.slug}`} className="service-card-cta">
                {service.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
