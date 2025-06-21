import { GitBranch, Joystick, VenetianMask, X } from "lucide-react";
import Logo from "../../components/ui/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-gray-300 bg-gray-900 footer-container">
      <div className="grid grid-cols-1 gap-8 footer-grid sm:grid-cols-2 lg:grid-cols-3">
        {/* Column 1: Branding & Socials */}
        <div className="space-y-4 footer-column">
          <div className="flex items-center gap-2 text-2xl font-bold text-white">
            <Logo text="Cyber" image="/logo-icon.jpg" size="lg" />
          </div>
          <p className="text-sm text-gray-400">
            Cyber is your trusted destination for the latest mobile gadgets and
            accessories — designed to upgrade your digital life.
          </p>
          <div className="flex gap-3 pt-2 text-gray-400">
            <a href="#" aria-label="Instagram">
              <VenetianMask className="w-5 h-5 hover:text-white" />
            </a>
            <a href="#" aria-label="GitHub">
              <GitBranch className="w-5 h-5 hover:text-white" />
            </a>
            <a href="#" aria-label="Games">
              <Joystick className="w-5 h-5 hover:text-white" />
            </a>
            <a href="#" aria-label="Twitter">
              <X className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="footer-column">
          <h3 className="mb-3 text-lg font-semibold text-white">Services</h3>
          <p className="text-sm text-gray-400">More services coming soon.</p>
          {/* <ul className="space-y-2 text-sm">
            <li>
              <Link to="/bonus-program" className="hover:text-white">
                Bonus Program
              </Link>
            </li>
            <li>
              <Link to="/gift-cards" className="hover:text-white">
                Gift Cards
              </Link>
            </li>
            <li>
              <Link to="/credit-payment" className="hover:text-white">
                Credit & Payment
              </Link>
            </li>
            <li>
              <Link to="/service-contracts" className="hover:text-white">
                Service Contracts
              </Link>
            </li>
            <li>
              <Link to="/wallet" className="hover:text-white">
                Non-Cash Account
              </Link>
            </li>
            <li>
              <Link to="/payment-options" className="hover:text-white">
                Payment
              </Link>
            </li>
          </ul> */}
        </div>

        {/* Column 3: Help */}
        <div className="footer-column">
          <h3 className="mb-3 text-lg font-semibold text-white">
            Customer Help
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/user/orders" className="hover:text-white">
                Find an Order
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-white">
                Terms of Delivery
              </Link>
            </li>
            <li>
              <Link to="/return-policy" className="hover:text-white">
                Exchange & Returns
              </Link>
            </li>
            <li>
              <Link to="/term-and-conditions" className="hover:text-white">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-8 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} Cyber Studio. All rights reserved.
      </div>
    </footer>
  );
}
