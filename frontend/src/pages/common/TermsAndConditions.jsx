import React from "react";
import {
  Scale,
  Shield,
  FileText,
  AlertCircle,
  Smartphone,
  CreditCard,
  Globe,
} from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="px-6 py-12 text-gray-900 bg-white md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-10 h-10 mr-3 text-gray-700" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Cyber Mobile Shop Terms & Conditions
            </h1>
          </div>
          <div className="w-20 h-1 mx-auto mb-6 bg-cyan-600"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Please read these terms carefully before purchasing from our mobile
            shop.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="p-6 rounded-lg bg-gray-50">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                <Smartphone />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Welcome to Cyber Mobile Shop
                </h2>
                <p className="mt-3 text-gray-600">
                  These Terms and Conditions govern your use of Cyber's online
                  mobile store, purchases, and all related services. By placing
                  an order, you agree to be bound by these terms.
                </p>
              </div>
            </div>
          </section>

          {/* Terms Sections */}
          <div className="space-y-6">
            {/* Section 1 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Scale />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    1. Product Information & Pricing
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Cyber strives for accuracy in all product descriptions,
                    specifications, and pricing. However, we reserve the right
                    to correct any errors and cancel orders arising from such
                    errors.
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      All prices are in INR and inclusive of GST unless stated
                      otherwise
                    </li>
                    <li>
                      Product colors may vary slightly from website images
                    </li>
                    <li>
                      Accessories shown with devices are for illustration only
                      unless specified as included
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <CreditCard />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    2. Orders & Payments
                  </h3>
                  <p className="mt-2 text-gray-600">
                    By placing an order, you agree to provide current, complete,
                    and accurate purchase information.
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      We accept all major credit/debit cards, UPI, and net
                      banking
                    </li>
                    <li>Orders are subject to verification and fraud checks</li>
                    <li>
                      Your order is only confirmed after payment authorization
                    </li>
                    <li>
                      Cyber uses PCI-compliant payment gateways for secure
                      transactions
                    </li>
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
                    3. Warranty & Returns
                  </h3>
                  <p className="mt-2 text-gray-600">
                    All devices come with manufacturer warranty unless specified
                    as refurbished or open-box.
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>7-day replacement policy for manufacturing defects</li>
                    <li>
                      Warranty does not cover physical damage or liquid exposure
                    </li>
                    <li>
                      Return requests must be initiated within 24 hours of
                      delivery
                    </li>
                    <li>
                      See our{" "}
                      <a
                        href="/return-policy"
                        className="text-cyan-600 hover:underline"
                      >
                        Return Policy
                      </a>{" "}
                      for complete details
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Globe />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4. Data Privacy
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Cyber collects necessary personal data to process your
                    orders and improve services.
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>We never store your payment details</li>
                    <li>
                      Device IMEI numbers are registered as required by Indian
                      law
                    </li>
                    <li>Marketing communications are opt-in only</li>
                    <li>
                      Full details in our{" "}
                      <a
                        href="/privacy-policy"
                        className="text-cyan-600 hover:underline"
                      >
                        Privacy Policy
                      </a>
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
                    5. Limitation of Liability
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Cyber shall not be liable for:
                  </p>
                  <ul className="mt-3 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>Any incidental, consequential, or indirect damages</li>
                    <li>Service interruptions beyond our control</li>
                    <li>
                      Manufacturer software issues or compatibility problems
                    </li>
                    <li>Unauthorized device modifications after purchase</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Acceptance Section */}
          <section className="p-6 text-center rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">
              Cyber Mobile Shop Policies
            </h3>
            <p className="mt-2 text-gray-600">
              By purchasing from Cyber, you acknowledge understanding of these
              terms and agree to comply with all applicable laws and
              regulations.
            </p>
            <div className="flex justify-center mt-4 space-x-6">
              <a
                href="/return-policy"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Return Policy
              </a>
              <a
                href="/privacy-policy"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="/shipping-policy"
                className="text-sm font-medium text-cyan-600 hover:underline"
              >
                Shipping Policy
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

export default TermsAndConditions;
