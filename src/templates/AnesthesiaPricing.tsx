'use client';

import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';

export const AnesthesiaPricing = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>('Plan 2');
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

  const packages = [
    {
      name: 'Plan 1',
      price: 'TBD',
      description: 'Plan description goes here',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
      ],
      highlighted: false,
    },
    {
      name: 'Plan 2',
      price: 'TBD',
      description: 'Plan description goes here',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
      ],
      highlighted: true,
    },
    {
      name: 'Plan 3',
      price: 'TBD',
      description: 'Plan description goes here',
      features: [
        'Feature 1',
        'Feature 2',
        'Feature 3',
        'Feature 4',
        'Feature 5',
        'Feature 6',
        'Feature 7',
        'Feature 8',
      ],
      highlighted: false,
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="bg-gradient-to-b from-white to-purple-50 py-20 md:py-32">
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
            Choose Your
            {' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Flexible pricing tailored to your practice size and needs
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-3">
          {packages.map((pkg, index) => {
            const isSelected = selectedPlan === pkg.name;
            return (
              <div
                key={pkg.name}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedPlan(pkg.name)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedPlan(pkg.name);
                  }
                }}
                className={`relative flex cursor-pointer flex-col rounded-2xl border p-8 shadow-lg transition-all duration-300 ease-out ${
                  isSelected
                    ? 'z-10 scale-105 border-purple-500 bg-gradient-to-br from-purple-50 to-white shadow-2xl ring-2 ring-purple-500/50'
                    : 'border-gray-200 bg-white hover:-translate-y-1 hover:shadow-xl'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? (isSelected ? 'translateY(0) scale(1.05)' : 'translateY(0) scale(1)')
                    : 'translateY(40px) scale(0.95)',
                  transition: `opacity 0.5s ease-out ${0.1 + index * 0.1}s, transform 0.5s ease-out ${0.1 + index * 0.1}s`,
                }}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{pkg.name}</h3>
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary">{pkg.price}</div>
                  <p className="text-sm text-gray-600">Contact us for pricing</p>
                </div>

                <ul className="mb-8 grow space-y-3">
                  {pkg.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-100 text-primary">
                        <Check className="size-3" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={e => e.stopPropagation()}
                  className={buttonVariants({
                    variant: isSelected ? 'default' : 'outline',
                    className: `w-full ${
                      isSelected
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30'
                        : 'border-2 border-primary text-primary hover:bg-primary/5'
                    }`,
                  })}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s',
          }}
        >
          <p className="text-lg text-gray-600">
            Additional information text goes here.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold text-primary">Highlighted text</span>
            {' '}
            and more details.
          </p>
        </div>
      </div>
    </section>
  );
};
