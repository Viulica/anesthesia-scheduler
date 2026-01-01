'use client';

import { useEffect, useState } from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';

const screenshots = [
  {
    id: 'requests',
    title: 'Requests',
    image: '/WhatsApp Image 2026-01-01 at 21.55.14.jpeg',
  },
  {
    id: 'admin',
    title: 'Administration',
    image: '/WhatsApp Image 2026-01-01 at 21.55.35.jpeg',
  },
  {
    id: 'reports',
    title: 'Reports',
    image: '/WhatsApp Image 2026-01-01 at 21.59.41.jpeg',
  },
];

export const AnesthesiaHero = () => {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('requests');

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeScreenshot = screenshots.find(s => s.id === activeTab) ?? screenshots[0]!;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-purple-50 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 size-[500px] rounded-full bg-purple-200/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 size-[400px] rounded-full bg-purple-300/20 blur-3xl" />
      </div>

      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.4fr]">
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

          {/* Right content - Screenshot Mockup */}
          <div
            className="relative lg:pl-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s',
            }}
          >
            {/* Tab Navigation */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex gap-2 rounded-xl border border-gray-200 bg-white/80 p-1.5 shadow-sm backdrop-blur-sm">
                {screenshots.map(screenshot => (
                  <button
                    key={screenshot.id}
                    type="button"
                    onClick={() => setActiveTab(screenshot.id)}
                    className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                      activeTab === screenshot.id
                        ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {screenshot.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Laptop Mockup */}
            <div className="relative">
              {/* Laptop Screen */}
              <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-1 shadow-2xl">
                {/* Inner bezel */}
                <div className="overflow-hidden rounded-md bg-black p-0.5">
                  {/* Browser Window */}
                  <div className="overflow-hidden rounded-sm bg-white">
                    {/* Browser Chrome - Minimal */}
                    <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-3 py-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1.5">
                          <div className="size-2.5 rounded-full bg-red-400" />
                          <div className="size-2.5 rounded-full bg-yellow-400" />
                          <div className="size-2.5 rounded-full bg-green-400" />
                        </div>
                        <div className="ml-3 hidden rounded bg-white px-3 py-1 text-xs text-gray-500 shadow-sm md:block">
                          anesthesia-scheduler.app
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Container */}
                    <div className="relative bg-white">
                      <img
                        src={activeScreenshot.image}
                        alt={activeScreenshot.title}
                        className="h-auto w-full transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop Base - Sleek minimal design */}
              <div className="relative mx-auto h-2 w-4/5 rounded-b-xl bg-gradient-to-b from-gray-700 to-gray-800 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
