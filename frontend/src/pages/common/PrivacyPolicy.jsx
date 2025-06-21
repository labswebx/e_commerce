import React from "react";
import { Shield, Lock, Database, Mail, Smartphone, Globe } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="px-6 py-12 text-gray-900 bg-white md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 mr-3 text-gray-700" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Cyber Mobile Shop Privacy Policy
            </h1>
          </div>
          <div className="w-20 h-1 mx-auto mb-6 bg-cyan-600"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your personal information.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="p-6 rounded-lg bg-gray-50">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                <Lock />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Information Security Commitment
                </h2>
                <p className="mt-3 text-gray-600">
                  Cyber Mobile Shop is committed to protecting your privacy. We
                  comply with all applicable data protection laws in India,
                  including the Information Technology Act, 2000 and its
                  amendments.
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
                  <Database />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. Information We Collect
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We collect information necessary to process your orders and
                    provide services:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      Personal details: Name, email, phone number, shipping
                      address
                    </li>
                    <li>Device information: IMEI numbers as required by law</li>
                    <li>
                      Payment information: Processed securely through PCI-DSS
                      compliant gateways (we don't store card details)
                    </li>
                    <li>
                      Technical data: IP address, browser type, device
                      information for analytics
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Smartphone />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. How We Use Your Information
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Your data is used solely for legitimate business purposes:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>To process and fulfill your orders</li>
                    <li>For warranty registration and service requests</li>
                    <li>
                      To communicate about your order status and important
                      service updates
                    </li>
                    <li>
                      For fraud prevention and security of our systems (with
                      consent) for marketing communications
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Globe />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    3. Data Sharing & Disclosure
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We do not sell your personal information. Limited sharing
                    occurs with:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      Shipping partners (only necessary delivery information)
                    </li>
                    <li>Payment processors for transaction completion</li>
                    <li>
                      Device manufacturers for warranty and support services
                    </li>
                    <li>When required by law or to protect our legal rights</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Shield />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Data Security
                  </h3>
                  <p className="mt-2 text-gray-600">
                    We implement robust security measures:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>SSL encryption for all data transmissions</li>
                    <li>Regular security audits and vulnerability testing</li>
                    <li>Limited employee access to sensitive data</li>
                    <li>Secure storage with access controls</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    5. Your Rights
                  </h3>
                  <p className="mt-2 text-gray-600">You have the right to:</p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>Access the personal data we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>
                      Opt-out of marketing communications (use unsubscribe link
                      in emails)
                    </li>
                    <li>
                      Request deletion of data, subject to legal retention
                      requirements
                    </li>
                  </ul>
                  <p className="mt-3 text-gray-600">
                    To exercise these rights, contact our Data Protection
                    Officer at privacy@cybermobileshop.com
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Acceptance Section */}
          <section className="p-6 text-center rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">
              Policy Updates
            </h3>
            <p className="mt-2 text-gray-600">
              We may update this policy periodically. Significant changes will
              be notified through our website or email.
            </p>
            <div className="flex justify-center mt-4 space-x-6">
              <a
                href="/terms"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Terms & Conditions
              </a>
              <a
                href="/shipping-policy"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Shipping Policy
              </a>
              <a
                href="/contact"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Contact Us
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

export default PrivacyPolicy;
