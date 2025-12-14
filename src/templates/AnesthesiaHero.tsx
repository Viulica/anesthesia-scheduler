'use client';

import { Calendar, Clock, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';

export const AnesthesiaHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featureCards = [
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Automatically generate schedules based on your rules and preferences',
    },
    {
      icon: Users,
      title: 'Multi-Location',
      description: 'Manage multiple locations with different groups and requirements',
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Access schedules anywhere with web-based technology',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 size-[500px] rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-purple-300/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div
              className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s',
              }}
            >
              Modern Scheduling Solutions
            </div>

            <h1
              className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s',
              }}
            >
              The
              {' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Anesthesia Scheduler
              </span>
            </h1>

            <p
              className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s',
              }}
            >
              A web-based application that streamlines call and operating room coverage.
              Its fully customizable design allows administrators to tailor schedules, workflows,
              and coverage rules to the unique needs of their practice and the various groups within it.
            </p>

            <div
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
              }}
            >
              <a
                href="#contact"
                className={buttonVariants({ size: 'lg', className: 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30' })}
              >
                Get Started
              </a>
              <a
                href="#features"
                className={buttonVariants({ variant: 'outline', size: 'lg', className: 'border-2 border-primary text-primary hover:bg-primary/5' })}
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right content - Feature cards */}
          <div className="relative">
            <div className="grid gap-4">
              {featureCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-purple-200 bg-white p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                    style={{
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? 'translateX(0)' : 'translateX(30px)',
                      transition: `opacity 0.5s ease-out ${0.3 + index * 0.1}s, transform 0.5s ease-out ${0.3 + index * 0.1}s`,
                    }}
                  >
                    <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-primary">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900">{card.title}</h3>
                    <p className="text-gray-600">{card.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
