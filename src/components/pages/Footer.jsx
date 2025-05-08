import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-blue-800 via-blue-700 to-blue-600 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h2 className="text-2xl font-semibold">IceNest</h2>
          <p className="mt-2 text-sm text-gray-200">
            Your cozy winter subscription destination
          </p>
          <div className="mt-4 flex space-x-4">
          <a target='_blank' href="https://www.facebook.com/"><FaFacebook size={24} /></a>
          <a target='_blank' href="https://x.com/"><FaTwitter size={24}/></a>
          <a target='_blank' href="https://www.instagram.com/"><FaInstagram size={24}/></a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Explore</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
            <li><a href="/boxes" className="hover:text-blue-300">Subscription Boxes</a></li>
            <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="/terms" className="hover:text-blue-300">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-blue-300">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Stay Updated</h3>
          <p className="mt-2 text-sm text-gray-200">
            Subscribe for cozy updates, offers, and more!
          </p>
          <form className="mt-4 flex flex-col sm:flex-row sm:items-stretch gap-2 bg-base-200">
            <input type="email" placeholder="Enter your email" className="w-full sm:flex-1 sm:w-auto px-4 py-2 rounded-md text-gray-800 focus:outline-none"
            />
          <div className='flex justify-center sm:justify-start  '>
          <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white transition duration-300 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-blue-800 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} IceNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
