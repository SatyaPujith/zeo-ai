import { Link } from 'react-router-dom';

const footerLinks = {
  features: {
    title: 'FEATURES',
    links: [
      { name: 'Video Consultations', href: '#' },
      { name: 'Visual Analysis', href: '#' },
      { name: 'Symptom Checker', href: '#' },
      { name: 'Health Records', href: '#' },
    ],
  },
  services: {
    title: 'SERVICES',
    links: [
      { name: 'Medicine Information', href: '#' },
      { name: 'Dosage Guide', href: '#' },
      { name: 'Disease Database', href: '#' },
      { name: 'Emergency Triage', href: '#' },
      { name: 'Health Monitoring', href: '#' },
      { name: 'Lab Results', href: '#' },
      { name: 'Preventive Care', href: '#' },
    ],
  },
  company: {
    title: 'COMPANY',
    links: [
      { name: 'About Zeo.ai', href: '#' },
      { name: 'Our Mission', href: '#' },
      { name: 'Medical Team', href: '#' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
  },
  resources: {
    title: 'RESOURCES',
    links: [
      { name: 'Help Center', href: '#' },
      { name: 'Health Library', href: '#' },
      { name: 'User Guide', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'HIPAA Compliance', href: '#' },
    ],
  },
  connect: {
    title: 'CONNECT',
    links: [
      { name: 'Support', href: '#' },
      { name: 'X (Twitter)', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'YouTube', href: '#' },
    ],
  },
};

const Footer = () => {
  return (
    <footer
      className="relative z-50 bg-[#0c0c0c] text-white py-12 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10"
      style={{ backgroundColor: '#0c0c0c', position: 'relative', zIndex: 50 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-12">
          {/* Logo & Copyright */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col justify-between">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              {/* Logo placeholder */}
              <div className="h-6 w-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-xs">
                Z
              </div>
              <span className="text-xl font-medium tracking-tight">Zeo.ai</span>
            </Link>
            <div className="text-sm text-white/40 mt-auto">
              <p>&copy; 2026 Zeo.ai</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="col-span-1">
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
