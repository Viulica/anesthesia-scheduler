'use client';

import { Bell, Calendar, ChevronDown, ChevronRight, FileText, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const AnesthesiaFeatures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null);
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

  const features = [
    {
      id: 'multiple-locations',
      icon: MapPin,
      title: 'Managing Multiple Locations',
      description:
        'Easily manage multiple locations, each with its own unique groups and needs. Customize schedules, privileges, and reporting for every group at every location. We work closely with you to ensure each setup is perfectly tailored to your practice.',
    },
    {
      id: 'privileges',
      icon: FileText,
      title: 'Privileges Tailored to Each Group',
      description:
        'Customize access levels and permissions for different provider groups. Control who can view, edit, and manage schedules based on their role and location. Set up detailed privilege settings that match your organizational structure.',
    },
    {
      id: 'reporting',
      icon: FileText,
      title: 'Reporting',
      description:
        'The Anesthesia Scheduler provides customizable reports to track every aspect of your schedule. Generate daily, weekly, or monthly reports, and filter by location, provider, or call assignment for clear insights.',
    },
    {
      id: 'self-scheduling',
      icon: Calendar,
      title: 'Provider Self-Scheduling',
      description:
        'Providers can easily request shifts and vacations, streamlining workflow. Depending on their privilege settings, they may also view how many requests have been made for a specific day, allowing providers to adjust their schedules to meet the group\'s needs. Administrators can quickly review and respond to requests with ease.',
    },
    {
      id: 'auto-scheduling',
      icon: Calendar,
      title: 'Auto-Scheduling',
      description:
        'The Anesthesia Scheduler reduces administrators\' workload by automatically generating weekly, monthly, and yearly assignments, including rotational schedules. It can create schedules based on your chosen assignments using previously existing events. This tool is essential for ensuring an even distribution of call assignments among all employees.',
    },
    {
      id: 'reminders',
      icon: Bell,
      title: 'Reminders & Messaging',
      description:
        'Keep providers informed about assignments, schedule changes, and request responses with automated email and push notifications. You can also communicate directly with providers using our built-in messaging tool for easy, accessible communication.',
    },
  ];

  return (
    <section ref={sectionRef} id="features" className="bg-white py-20 md:py-32">
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
            Explore the Anesthesia Scheduler&apos;s Features
          </h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isExpanded = expandedFeature === feature.id;
            return (
              <div
                key={feature.id}
                role="button"
                tabIndex={0}
                onClick={() => setExpandedFeature(isExpanded ? null : feature.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedFeature(isExpanded ? null : feature.id);
                  }
                }}
                className="group cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors hover:border-purple-300 hover:shadow-md"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease-out ${0.1 + index * 0.05}s, transform 0.5s ease-out ${0.1 + index * 0.05}s`,
                  textDecoration: 'none',
                }}
              >
                {/* Header - Always visible */}
                <div
                  className={`flex items-center gap-4 px-6 py-4 ${
                    isExpanded ? 'border-b border-purple-200 bg-purple-50' : ''
                  }`}
                >
                  <div className={`flex size-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                    isExpanded
                      ? 'bg-primary text-white'
                      : 'bg-purple-50 text-primary'
                  }`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3
                    className="grow text-lg font-semibold text-gray-900"
                    style={{ textDecoration: 'none' }}
                  >
                    {feature.title}
                  </h3>
                  <div className="shrink-0 text-gray-400">
                    {isExpanded
                      ? (
                          <ChevronDown className="size-5" />
                        )
                      : (
                          <ChevronRight className="size-5" />
                        )}
                  </div>
                </div>

                {/* Expandable content - CSS Grid trick */}
                <div
                  className="overflow-hidden"
                  style={{
                    display: 'grid',
                    gridTemplateRows: isExpanded ? '1fr' : '0fr',
                    willChange: 'grid-template-rows',
                    transform: 'translateZ(0)',
                    transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div
                    style={{
                      minHeight: 0,
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? 'translateY(0)' : 'translateY(10px)',
                      transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1), transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <div className="px-6 py-4 pl-20">
                      <p className="leading-relaxed text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
