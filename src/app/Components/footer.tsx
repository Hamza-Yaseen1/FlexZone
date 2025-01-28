/* eslint-disable @next/next/no-img-element */
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0">
          {/* Branding Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-extrabold text-start">GymWeb</h2>
            <img
              src="/images/logo-light.svg"
              alt="GymWeb Logo"
              className="p-8 pl-1"
            />
            <p className="text-gray-400 max-w-md leading-8">
              Transform your body and mind with the best fitness training in the
              city. Join us today and be part of the GymWeb community.
            </p>
          </div>

          {/* Quick Links */}
          <nav
            className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-16 text-center lg:text-left"
            aria-label="Footer Navigation"
          >
            <div>
              <h3 className="text-lg font-semibold text-orange-500">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-300 pt-8">
                {["Home", "About", "Services", "Contact"].map((link) => (
                  <li
                    key={link}
                    className="hover:text-orange-500 transition-colors pt-3"
                  >
                    <a
                      href="#"
                      className="hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-500">
                Follow Us
              </h3>
              <ul className="flex justify-center lg:justify-start space-x-8 pt-6">
                <li className="hover:text-orange-500 transition-colors">
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-orange-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* Newsletter */}
        </div>
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-orange-500">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-gray-400 text-sm my-2 pt-5">
            Stay updated with the latest fitness tips and offers.
          </p>
          <form className=" pt-5 flex flex-col sm:flex-row items-center sm:items-stretch space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full sm:w-auto rounded bg-gray-700 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GymWeb. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
