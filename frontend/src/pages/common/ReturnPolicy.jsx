import React from "react";
import { RefreshCw, Package, Clock, HelpCircle } from "lucide-react";

const ReturnPolicy = () => {
  return (
    <div className="px-6 py-12 text-gray-900 bg-white md:px-20">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <section className="text-center">
          <div className="flex items-center justify-center mb-4">
            <RefreshCw className="w-10 h-10 mr-3 text-gray-700" />
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Exchange & Return Policy
            </h1>
          </div>
          <div className="w-20 h-1 mx-auto mb-6 bg-gray-800"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            We want you to be completely satisfied with your purchase. Here's
            our hassle-free return policy.
          </p>
        </section>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Overview */}
          <section className="p-6 rounded-lg bg-gray-50">
            <div className="flex items-start">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                <Package />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Our Return Promise
                </h2>
                <p className="mt-3 text-gray-600">
                  If you're not satisfied with your purchase, we'll gladly
                  accept returns within 30 days of delivery. Items must be
                  unused, in original packaging, and with all tags attached.
                </p>
              </div>
            </div>
          </section>

          {/* Policy Sections */}
          <div className="space-y-6">
            {/* Return Process */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <RefreshCw />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    How to Return an Item
                  </h3>
                  <ol className="mt-3 ml-5 space-y-2 text-gray-600 list-decimal">
                    <li>
                      Contact our customer service team to initiate your return
                    </li>
                    <li>Pack the item securely in its original packaging</li>
                    <li>Include the original invoice and reason for return</li>
                    <li>Ship the package to our return center</li>
                  </ol>
                  <p className="mt-3 text-sm text-gray-500">
                    Return shipping costs are the responsibility of the customer
                    unless the return is due to our error.
                  </p>
                </div>
              </div>
            </section>

            {/* Exchange Process */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <RefreshCw />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Exchange Process
                  </h3>
                  <p className="mt-2 text-gray-600">
                    For exchanges of size or color:
                  </p>
                  <ul className="mt-2 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>Follow the same process as returns</li>
                    <li>Clearly indicate the replacement item you'd prefer</li>
                    <li>We'll ship the new item once we receive your return</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-500">
                    If the replacement item is more expensive, you'll need to
                    pay the difference.
                  </p>
                </div>
              </div>
            </section>

            {/* Timeframe */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <Clock />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Processing Time
                  </h3>
                  <p className="mt-2 text-gray-600">Please allow:</p>
                  <ul className="mt-2 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      3-5 business days for us to process your return once
                      received
                    </li>
                    <li>
                      5-7 business days for refunds to reflect in your account
                    </li>
                    <li>7-10 business days for exchanges to be shipped out</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Non-Returnable Items */}
            <section className="p-6 border border-gray-200 rounded-lg">
              <div className="flex items-start">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 text-gray-700 bg-gray-100 rounded-lg">
                  <HelpCircle />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Non-Returnable Items
                  </h3>
                  <p className="mt-2 text-gray-600">
                    The following items cannot be returned:
                  </p>
                  <ul className="mt-2 ml-5 space-y-2 text-gray-600 list-disc">
                    <li>Personalized or custom-made products</li>
                    <li>Underwear and swimwear (for hygiene reasons)</li>
                    <li>Opened software, DVDs, or CDs</li>
                    <li>Perishable goods and food items</li>
                    <li>Items marked as "Final Sale"</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Refund Information */}
          <section className="p-6 text-center rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">
              Refund Information
            </h3>
            <p className="mt-2 text-gray-600">
              Refunds will be issued to the original payment method. Store
              credit is available upon request.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              For any questions about our return policy, please contact our
              customer service team.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
