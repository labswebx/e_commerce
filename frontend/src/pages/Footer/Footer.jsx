import {
  Clock,
  GitBranch,
  Joystick,
  Mail,
  Phone,
  Store,
  VenetianMask,
  X,
} from "lucide-react";
import Logo from "../../components/ui/Logo";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="px-6 py-10 text-gray-300 bg-gray-900 footer-container">
      <div className="grid justify-between grid-cols-1 gap-8 footer-grid sm:grid-cols-2 lg:grid-cols-3">
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
        {/* <div className="footer-column">
          <h3 className="mb-3 text-lg font-semibold text-white">Services</h3>
          <p className="text-sm text-gray-400">More services coming soon.</p>
        </div> */}

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

        {/* Column 4: Contact Information */}
        <div className="footer-column">
          <h3 className="mb-3 text-lg font-semibold text-white">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <Mail className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-400" />
              <span>support@cyber.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-400" />

              <span>+91 83077 47802</span>
            </li>
            <li className="flex items-start gap-3">
              <Store className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-400" />
              <span>123 Tech Street, Mumbai, India</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="flex-shrink-0 w-4 h-4 mt-0.5 text-gray-400" />
              <div>
                <p>Mon-Fri: 10:00 AM - 7:00 PM</p>
                <p>Sat: 10:00 AM - 5:00 PM</p>
                <p>Sun: Closed</p>
              </div>
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
