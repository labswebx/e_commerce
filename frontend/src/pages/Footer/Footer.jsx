import { GitBranch, Joystick, VenetianMask, X } from "lucide-react";
import Logo from "../../components/ui/Logo";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-grid">
        {/* Column 1 */}
        <div className="footer-column">
          <div className="flex items-center gap-2 mb-2 text-2xl font-bold">
            <Logo text="Cyber" image="/logo-icon.jpg" size="lg" />
          </div>
          <p className="footer-description">
            Cyber is a leading online electronics store based in Delhi, offering
            the latest gadgets, devices, and accessories to enhance your digital
            lifestyle.
          </p>
          <div className="footer-icons">
            <VenetianMask className="w-5 h-5 transition hover:text-white" />
            <GitBranch className="w-5 h-5 transition hover:text-white" />
            <Joystick className="w-5 h-5 transition hover:text-white" />
            <X className="w-5 h-5 transition hover:text-white" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-list">
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-column">
          <h3 className="footer-title">Assistance to the buyer</h3>
          <ul className="footer-list">
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Cyber Studio. All rights reserved.
      </div>
    </footer>
  );
}
