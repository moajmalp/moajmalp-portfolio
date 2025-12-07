import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { profileData } from '../data/profileData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black text-gray-900 dark:text-white py-16 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent inline-block">
              {profileData.personal.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed">
              WordPress Developer & SEO Specialist building scalable, high-performance web solutions for businesses worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-center group">
                <Mail className="w-5 h-5 mr-3 text-primary-600 transition-colors" />
                <a href={`mailto:${profileData.personal.email}`} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {profileData.personal.email}
                </a>
              </li>
              <li className="flex items-center group">
                <Phone className="w-5 h-5 mr-3 text-primary-600 transition-colors" />
                <a href={`tel:${profileData.personal.phone}`} className="group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {profileData.personal.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-primary-600" />
                {profileData.personal.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {currentYear} {profileData.personal.shortName}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
