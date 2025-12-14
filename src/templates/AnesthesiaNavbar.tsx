'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { buttonVariants } from '@/components/ui/buttonVariants';

export const AnesthesiaNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { name: 'Home', href: '#', id: '' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Support', href: '#support', id: 'support' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['features', 'pricing', 'support'];
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY < 100) {
        setActiveSection('');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30">
              <svg
                className="size-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="17" y="3" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="3" y="17" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor" />
                <rect x="17" y="17" width="4" height="4" rx="1" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-tight text-gray-900">Anesthesia</span>
              <span className="text-sm font-bold leading-tight text-primary">SCHEDULER</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative text-gray-700 transition-colors hover:text-primary ${
                  activeSection === item.id ? 'font-semibold text-primary' : ''
                }`}
                style={{
                  opacity: mounted ? 1 : 0,
                  transform: mounted ? 'translateY(0)' : 'translateY(-10px)',
                  transition: `opacity 0.4s ease-out ${0.1 + index * 0.05}s, transform 0.4s ease-out ${0.1 + index * 0.05}s`,
                }}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute inset-x-0 bottom-[-21px] h-0.5 bg-primary" />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div
            className="hidden items-center gap-4 md:flex"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.4s ease-out 0.3s, transform 0.4s ease-out 0.3s',
            }}
          >
            <a
              href="/sign-in"
              className="text-gray-700 transition-colors hover:text-primary"
            >
              Log In
            </a>
            <a
              href="#contact"
              className={buttonVariants({ className: 'bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/30' })}
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">
          <div className="container mx-auto p-4">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-purple-50 hover:text-primary ${
                    activeSection === item.id ? 'bg-purple-50 font-semibold text-primary' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <hr className="my-2" />
              <a
                href="/sign-in"
                className="rounded-lg px-3 py-2 text-gray-700 transition-colors hover:bg-purple-50 hover:text-primary"
              >
                Log In
              </a>
              <a
                href="#contact"
                className={buttonVariants({ className: 'bg-primary hover:bg-primary/90 text-white shadow-md shadow-primary/30' })}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
