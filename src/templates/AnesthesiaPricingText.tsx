'use client';

import { DollarSign, Mail, TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';

export const AnesthesiaPricingText = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pricingPoints = [
    {
      icon: DollarSign,
      title: 'Custom Pricing',
      description: 'Tailored to your practice size',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Plans',
      description: 'Grows with your needs',
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Pricing Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="mb-8 inline-flex rounded-full bg-primary/10 p-4 text-primary">
              <DollarSign className="size-8" />
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Flexible Pricing Tailored to Your Practice
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Flexible pricing tailored to your practice size and operational needs. Contact us to receive your custom quote.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              We work with practices of all sizes to create a pricing structure that fits your budget and scales with your growth.
            </p>

            {/* Pricing Points Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {pricingPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="group rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-purple-300 hover:shadow-md"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `opacity 0.5s ease-out ${0.2 + index * 0.08}s, transform 0.5s ease-out ${0.2 + index * 0.08}s`,
                    }}
                  >
                    <div className="mb-3 inline-flex rounded-lg bg-purple-50 p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mb-1 font-semibold text-gray-900">{point.title}</h3>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - CTA */}
          <div
            className="flex flex-col justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
            }}
          >
            <div
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 p-8 text-white shadow-xl md:p-12"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
              }}
            >
              <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                <Mail className="size-6" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Get Your Custom Quote</h3>
              <p className="mb-6 text-purple-100">
                Contact us today to discuss your practice&apos;s unique needs and receive a personalized pricing quote.
              </p>
              <a
                href="#contact"
                className={buttonVariants({
                  size: 'lg',
                  className: 'bg-white text-purple-600 hover:bg-purple-50 shadow-lg',
                })}
              >
                Request Your Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
