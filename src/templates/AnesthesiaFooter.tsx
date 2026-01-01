import { Mail } from 'lucide-react';

export const AnesthesiaFooter = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Quick Links',
      links: [
        { name: 'Home', href: '#' },
        { name: 'Features', href: '#features' },
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
              <img
                src="/logo.png"
                alt="Anesthesia Scheduler Logo"
                className="size-10 object-contain"
              />
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
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href="mailto:info@anesthesiascheduler.com" className="hover:text-primary">
                info@anesthesiascheduler.com
              </a>
            </div>
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
