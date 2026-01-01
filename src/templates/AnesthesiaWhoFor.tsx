'use client';

import { Building2, Check, MapPinned, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const AnesthesiaWhoFor = () => {
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

  const audiences = [
    {
      icon: MapPinned,
      title: 'Multiple Locations w/ Multiple Groups',
      description: 'Comprehensive solution for complex multi-site operations',
    },
    {
      icon: Building2,
      title: 'One Location w/ Multiple Groups',
      description: 'Ideal for single facilities with multiple provider groups',
    },
    {
      icon: User,
      title: 'Sole Practitioners',
      description: 'Perfect for individual practitioners managing their own schedule',
    },
  ];

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="mb-12 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Who is
            {' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Anesthesia Scheduler
            </span>
            {' '}
            made for?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Flexible solutions that scale with your practice, no matter the size
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className="group relative overflow-hidden rounded-2xl border border-purple-200 bg-white p-8 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.5s ease-out ${0.15 + index * 0.1}s, transform 0.5s ease-out ${0.15 + index * 0.1}s`,
                }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-600/5 opacity-0 transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
                    <Icon className="size-8" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {audience.title}
                  </h3>

                  <p className="mb-6 text-gray-600">
                    {audience.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary">
                    <Check className="size-5" />
                    <span className="text-sm font-semibold">Fully Supported</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div
          className="mt-16 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-500 p-8 text-center text-white shadow-xl md:p-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
          }}
        >
          <h3 className="mb-4 text-2xl font-bold md:text-3xl">
            Find out if the Anesthesia Scheduler is the right fit for you
          </h3>
          <p className="mb-6 text-lg text-purple-100">
            We&apos;ll work with you to understand your needs and customize the perfect setup
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-semibold text-purple-600 transition-transform hover:scale-105"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};
