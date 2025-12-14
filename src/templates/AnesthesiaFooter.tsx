import { Mail, MapPin, Phone } from 'lucide-react';

export const AnesthesiaFooter = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Support', href: '#support' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Admin Manual', href: '#' },
        { name: 'User Manual', href: '#' },
        { name: 'Video Tutorials', href: '#' },
        { name: 'FAQs', href: '#' },
      ],
    },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center gap-3">
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
            </div>
            <p className="text-sm text-gray-600">
              Streamlining call and operating room coverage for anesthesia practices nationwide.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map(column => (
            <div key={column.title}>
              <h3 className="mb-4 font-semibold text-gray-900">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-600 transition-colors hover:text-primary">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <a href="mailto:info@anesthesiascheduler.com" className="hover:text-primary">
                  info@anesthesiascheduler.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Contact us for phone support</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Serving practices nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            ©
            {' '}
            {currentYear}
            {' '}
            Anesthesia Scheduler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
