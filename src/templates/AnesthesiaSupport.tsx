'use client';

import { Book, GraduationCap, Headphones, HelpCircle, Mail, MessageSquare, Video } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const AnesthesiaSupport = () => {
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

  const resources = [
    {
      icon: Book,
      title: 'Admin Manual',
      description: 'Comprehensive guide for administrators',
    },
    {
      icon: Book,
      title: 'User Manual',
      description: 'Easy-to-follow guide for all users',
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video walkthroughs',
    },
    {
      icon: GraduationCap,
      title: 'Training Sessions',
      description: 'Personalized training for your team',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can we get started?',
      answer: 'Implementation typically takes 2-4 weeks, including setup and training.',
    },
    {
      question: 'Is training included?',
      answer: 'Yes! Comprehensive administrator training is included with every implementation.',
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide dedicated account executives, email support, phone support, and comprehensive documentation.',
    },
  ];

  return (
    <section ref={sectionRef} id="support" className="bg-white py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side - Support & Training */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <div className="mb-8 inline-flex rounded-full bg-primary/10 p-4 text-primary">
              <Headphones className="size-8" />
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Support & Training
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              We pride ourselves on delivering the highest level of customer service, from the
              initial implementation through comprehensive administrator training. Our team
              provides ongoing support and guidance to ensure every administrator is comfortable
              and confident with all aspects of the program.
            </p>

            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Administrators are encouraged to reach out to their account executive at any time
              with questions, concerns, or feedback.
            </p>

            {/* Resources Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {resources.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <div
                    key={resource.title}
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
                    <h3 className="mb-1 font-semibold text-gray-900">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side - Contact & FAQs */}
          <div
            className="flex flex-col justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s',
            }}
          >
            <div className="mb-8 inline-flex rounded-full bg-primary/10 p-4 text-primary">
              <HelpCircle className="size-8" />
            </div>

            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>

            <div className="mb-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${0.3 + index * 0.1}s, transform 0.5s ease-out ${0.3 + index * 0.1}s`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-100 text-primary">
                      <MessageSquare className="size-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div
              id="contact"
              className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 p-8 text-white shadow-xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
                transition: 'opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s',
              }}
            >
              <div className="mb-4 inline-flex rounded-full bg-white/20 p-3">
                <Mail className="size-6" />
              </div>
              <h3 className="mb-2 text-2xl font-bold">Questions? Contact us!</h3>
              <p className="mb-6 text-purple-100">
                We&apos;ll be glad to hear from you
              </p>
              <a
                href="mailto:info@anesthesiascheduler.com"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-purple-600 transition-transform hover:scale-105"
              >
                <Mail className="size-5" />
                info@anesthesiascheduler.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
