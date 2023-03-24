import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-10 sm:pt-12 pb-8 sm:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">About Us</h3>
            <p className="text-gray-400 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo vitae congue malesuada.</p>
            <p className="text-gray-400 text-sm">© 2023 Travel Booking, Inc.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Helpful Links</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2"><a href="#">FAQ</a></li>
              <li className="mb-2"><a href="#">Contact Us</a></li>
              <li className="mb-2"><a href="#">Terms of Service</a></li>
              <li className="mb-2"><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Follow Us</h3>
            <ul className="text-gray-400 text-sm">
              <li className="mb-2"><a href="#">Facebook</a></li>
              <li className="mb-2"><a href="#">Twitter</a></li>
              <li className="mb-2"><a href="#">Instagram</a></li>
              <li className="mb-2"><a href="#">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Subscribe</h3>
            <form>
              <div className="mb-2 flex">
                <input className="bg-gray-800 text-sm rounded-l py-2 px-3 w-full outline-none focus:bg-gray-700" type="email" placeholder="Email Address" />
                <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-r px-4 py-2 transition-colors duration-300">Subscribe</button>
              </div>
              <p className="text-gray-400 text-sm">Subscribe to our newsletter for exclusive offers and updates.</p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
