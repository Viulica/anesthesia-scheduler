'use client';

import { Bell, Calendar, FileText, MapPin, Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const AnesthesiaFeatures = () => {
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

  const features = [
    {
      id: 'multiple-locations',
      icon: MapPin,
      title: 'Managing Multiple Locations',
      description:
        'Many of our clients manage multiple locations, each with its own unique groups and needs. Our application makes it easy for administrators to meet those needs by customizing schedules, privileges, and reporting for every group at every location. We work closely with you to ensure each setup is seamless, efficient, and perfectly tailored to your practice.',
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
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile App',
      description:
        'Manage schedules on the go! Providers can view schedules and request shifts or vacations, while administrators can review schedules and requests—all from the mobile app!',
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
            The Anesthesia Scheduler offers
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Comprehensive features designed to streamline your scheduling workflow
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                  transition: `opacity 0.5s ease-out ${0.1 + index * 0.08}s, transform 0.5s ease-out ${0.1 + index * 0.08}s`,
                }}
              >
                <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
