'use client';

import { Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const AnesthesiaMobileApp = () => {
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

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-purple-50 py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left side - Icon and visual */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-200/30 blur-3xl" />
              <div className="relative flex size-48 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-purple-500 shadow-2xl md:size-64">
                {/* Checker pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(255, 255, 255, 0.15) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(255, 255, 255, 0.15) 75%)
                    `,
                    backgroundSize: '40px 40px',
                    backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px',
                  }}
                />
                <Smartphone className="relative z-10 size-24 text-white md:size-32" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
            }}
          >
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              Mobile Experience
            </div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
              Manage Schedules
              {' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                On the Go
              </span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              The Anesthesia Scheduler mobile app puts full schedule management in the palm of your hand.
              Providers can view schedules, request shifts or vacations, and stay connected—all from their mobile device.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Administrators can review schedules and requests on the go, ensuring seamless workflow management
              whether you&apos;re in the office or on the move.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-4 py-2">
                <Smartphone className="size-5 text-primary" />
                <span className="font-semibold text-gray-900">View Schedules</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-4 py-2">
                <Smartphone className="size-5 text-primary" />
                <span className="font-semibold text-gray-900">Request Shifts</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-purple-50 px-4 py-2">
                <Smartphone className="size-5 text-primary" />
                <span className="font-semibold text-gray-900">Review Requests</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
