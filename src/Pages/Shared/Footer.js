import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyan-50 pt-10 sm:pt-12 pb-8 sm:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div>
            <h3 className="text-lg font-semibold text-cyan-500 mb-4">
              About Us
            </h3>
            <h2 className="text-blue-600 text-2xl mb-2">
              Moddas Travel LTD.
            </h2>
            <p className="text-sm pt-2">Changzhou, China</p>
            <p className="text-sm">Call: 13093186387</p>
            <p className="text-sm">WeChat: moddasir2000</p>

            <p className="text-sm pt-2">© 2023 Moddas Travel Booking, Inc.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-cyan-500 mb-4">
              Helpful Links
            </h3>
            <ul className="text-black text-sm">
              <li className="mb-2">
                <Link href="#">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Terms of Service</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-cyan-500 font-semibold mb-4">
              Follow Us
            </h3>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="#">Facebook</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Twitter</Link>
              </li>
              <li className="mb-2">
                <Link href="#">Instagram</Link>
              </li>
              <li className="mb-2">
                <Link href="#">YouTube</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-cyan-500 font-semibold  mb-4">
              Subscribe
            </h3>
            <form>
              <div className="mb-2 flex">
                <input
                  className="bg-white text-sm rounded-l py-2 px-3 w-full outline-none focus:bg-cyan-100"
                  type="email"
                  placeholder="Email Address"
                />
                <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-r px-4 py-2 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-sm">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
