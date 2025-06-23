import React from "react";
import {
  Truck,
  Clock,
  MapPin,
  Box,
  RefreshCw,
  Shield,
  AlertCircle,
} from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="px-6 py-12 text-gray-900 bg-white md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Truck className="w-10 h-10 mr-3 text-gray-700" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Cyber Mobile Shop Shipping Policy
            </h1>
          </div>
          <div className="w-20 h-1 mx-auto mb-6 bg-cyan-600"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We deliver across India with secure packaging and reliable logistics
            partners.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="p-6 rounded-lg bg-gray-50">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                <MapPin />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Delivery Network
                </h2>
                <p className="mt-3 text-gray-600">
                  Cyber Mobile Shop partners with leading logistics providers to
                  ensure safe and timely delivery of your mobile devices across
                  India. We service all pin codes except certain remote
                  locations.
                </p>
              </div>
            </div>
          </section>

          {/* Policy Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Clock />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. Delivery Timelines
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Standard delivery times based on location:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      <span className="font-medium">Metro cities:</span> 2-3
                      business days
                    </li>
                    <li>
                      <span className="font-medium">Tier 2 cities:</span> 3-5
                      business days
                    </li>
                    <li>
                      <span className="font-medium">Rest of India:</span> 5-7
                      business days
                    </li>
                    <li>
                      <span className="font-medium">Remote areas:</span> 7-10
                      business days (subject to courier serviceability)
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-600">
                    Delivery times begin after order verification and payment
                    clearance. We'll send tracking information via SMS and email
                    once your order ships.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Box />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Shipping & Packaging
                  </h3>
                  <p className="mt-2 text-gray-600">
                    All devices are packed with the utmost care:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      Original manufacturer packaging with tamper-proof seals
                    </li>
                    <li>Additional protective outer packaging</li>
                    <li>Fragile item handling for all glass-body devices</li>
                    <li>Discreet packaging without brand markings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Shield />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Delivery Process
                  </h3>
                  <p className="mt-2 text-gray-600">
                    For your security and satisfaction:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      Signature required upon delivery (no drop-off without
                      recipient)
                    </li>
                    <li>
                      Open-box delivery available on request (inspect before
                      accepting)
                    </li>
                    <li>OTP verification for high-value orders (₹25,000+)</li>
                    <li>Photo proof of delivery for all shipments</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <RefreshCw />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Shipping Charges
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Our shipping fees are transparent:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      <span className="font-medium">Free shipping</span> on all
                      orders above ₹10,000
                    </li>
                    <li>
                      <span className="font-medium">Flat ₹99</span> for orders
                      below ₹10,000
                    </li>
                    <li>
                      <span className="font-medium">Express delivery</span>:
                      Additional ₹199 (metro cities only)
                    </li>
                    <li>
                      <span className="font-medium">Special handling</span> fees
                      may apply for fragile or premium devices
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <AlertCircle />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. Important Notes
                  </h3>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      We cannot deliver to P.O. boxes or military addresses
                    </li>
                    <li>
                      Delivery delays may occur during festivals, strikes, or
                      natural disasters
                    </li>
                    <li>
                      Please ensure someone is available to receive the package
                      during business hours
                    </li>
                    <li>
                      Undeliverable packages will be returned and subject to
                      restocking fees
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Acceptance Section */}
          <section className="p-6 text-center rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">
              Need Help With Delivery?
            </h3>
            <p className="mt-2 text-gray-600">
              Contact our customer support for any shipping inquiries or special
              delivery requests.
            </p>
            <div className="flex justify-center mt-4 space-x-6">
              <a
                href="/term-and-conditions"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="/privacy-policy"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Contact Support
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Last updated: June 20, 2025 | © 2025 Cyber Mobile Shop. All rights
              reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
