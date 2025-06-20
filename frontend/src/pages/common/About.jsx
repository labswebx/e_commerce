import {
  BadgeCheck,
  BadgeDollarSign,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Trophy,
  Truck,
  ChevronDown,
  Smartphone,
  Headphones,
  Watch,
  Repeat,
  Shield,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";
import Button from "../../components/ui/Button";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "Do you offer Cash on Delivery?",
      answer:
        "Yes, we offer Cash on Delivery in selected pin codes across India. You'll see the option during checkout if available in your area. For orders above ₹25,000, we require partial online payment for security reasons.",
      icon: <BadgeDollarSign className="w-5 h-5" />,
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking link via SMS and email. You can also track it from your account dashboard. Our system updates tracking information in real-time so you'll always know where your package is.",
      icon: <Truck className="w-5 h-5" />,
    },
    {
      question: "What if I receive a damaged product?",
      answer:
        "We offer a 7-day replacement policy for damaged or defective products. Please contact our support team within 24 hours of delivery with clear photos of the damaged item and packaging. We'll arrange for a replacement at no additional cost.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, UPI payments, net banking, and popular wallets. All transactions are secured with 256-bit SSL encryption. We also offer EMI options through leading banks.",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      question: "Do you provide international shipping?",
      answer:
        "Currently, we only ship within India. However, we're working to expand our delivery network to neighboring countries in the near future. Subscribe to our newsletter for updates on international shipping availability.",
      icon: <MapPinned className="w-5 h-5" />,
    },
    {
      question: "How can I contact customer support?",
      answer:
        "Our support team is available 24/7 via live chat on our website. You can also email us at support@cybermobileshop.com or call our toll-free number 1800-123-4567. Average response time is under 15 minutes during business hours.",
      icon: <HelpCircle className="w-5 h-5" />,
    },
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-500" />,
      title: "100% Genuine Products",
      description: "All products come with manufacturer warranty",
    },
    {
      icon: <Truck className="w-8 h-8 text-gray-700" />,
      title: "Fast Delivery",
      description: "Same-day delivery in major metro cities",
    },
    {
      icon: <LockKeyhole className="w-8 h-8 text-gray-500" />,
      title: "Secure Payments",
      description: "256-bit encryption for all transactions",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-gray-500" />,
      title: "Trusted Brands",
      description: "Official partners with leading manufacturers",
    },
    {
      icon: <Repeat className="w-8 h-8 text-gray-500" />,
      title: "Easy Returns",
      description: "7-day hassle-free return policy",
    },
    {
      icon: <Headphones className="w-8 h-8 text-gray-500" />,
      title: "24/7 Support",
      description: "Dedicated customer care team",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 to-gray-400">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                  <span className="block">Welcome to</span>
                  <span className="block text-gray-400">Cyber Mobile</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Your trusted destination for the latest smartphones,
                  accessories, and wearables. We combine cutting-edge technology
                  with exceptional service.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Button
                      variant="outline"
                      label="Shop Now"
                      href="/shop"
                      className="text-white border-white"
                      fullWidth
                    ></Button>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Button label="Learn More" href="#features"></Button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Smartphones showcase"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Mission & Vision
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2">
            <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-gray-600 bg-gray-100 rounded-md">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  Mission
                </h3>
              </div>
              <p className="text-gray-600">
                At Cyber Mobile, we're committed to making premium mobile
                technology accessible to everyone. We combine competitive
                prices, genuine products, and exceptional service to create the
                best mobile shopping experience in India. Our goal is to empower
                customers with the latest tech while maintaining transparency
                and trust in every transaction.
              </p>
            </div>

            <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-gray-600 bg-gray-100 rounded-md">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  Vision
                </h3>
              </div>
              <p className="text-gray-600">
                To revolutionize mobile commerce in India by becoming the most
                trusted and customer-centric platform. We envision a future
                where anyone can easily access the latest mobile technology with
                complete confidence in authenticity, pricing, and support. By
                2025, we aim to serve 1 million customers while maintaining our
                98% satisfaction rate through continuous innovation and service
                excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Cyber Mobile?
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
            <p className="max-w-2xl mt-4 text-xl text-gray-600 lg:mx-auto">
              We go beyond just selling phones - we deliver exceptional
              experiences.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="pt-6 transition-all duration-300 border border-gray-100 rounded-lg hover:border-gray-300"
                >
                  <div className="px-6">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-md bg-gray-50">
                      {feature.icon}
                    </div>
                    <div className="mt-6 text-center">
                      <h3 className="text-lg font-medium text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-zinc-800">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 lg:text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Cyber Mobile in Numbers
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-400"></div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            <div className="p-6 bg-gray-800 rounded-lg">
              <p className="text-4xl font-bold text-gray-400">10,000+</p>
              <p className="mt-2 text-sm font-medium tracking-wider text-gray-300 uppercase">
                Happy Customers
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <p className="text-4xl font-bold text-gray-400">50+</p>
              <p className="mt-2 text-sm font-medium tracking-wider text-gray-300 uppercase">
                Brands Available
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <p className="text-4xl font-bold text-gray-400">500+</p>
              <p className="mt-2 text-sm font-medium tracking-wider text-gray-300 uppercase">
                Products Listed
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <p className="text-4xl font-bold text-gray-400">24/7</p>
              <p className="mt-2 text-sm font-medium tracking-wider text-gray-300 uppercase">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What We Offer
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
              Explore our wide range of mobile products and services
            </p>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="relative group">
              <div className="absolute transition duration-200 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-gray-400 to-gray-700 blur group-hover:opacity-100"></div>
              <div className="relative h-full p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
                  <Smartphone className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-center text-gray-900">
                  Smartphones
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Latest models from top brands</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Competitive pricing</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Genuine products with warranty</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute transition duration-200 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 blur group-hover:opacity-100"></div>
              <div className="relative h-full p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
                  <Headphones className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-center text-gray-900">
                  Accessories
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Premium earphones & headphones</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Fast chargers & power banks</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Designer cases & screen guards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute transition duration-200 rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-gray-400 to-gray-500 blur group-hover:opacity-100"></div>
              <div className="relative h-full p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full">
                  <Watch className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="mb-2 text-lg font-medium text-center text-gray-900">
                  Wearables
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">
                      Smartwatches with health tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Fitness bands for all budgets</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-gray-500 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="ml-2">Wireless earbuds with ANC</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Journey
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
              From humble beginnings to becoming a trusted name in mobile retail
            </p>
          </div>

          <div className="relative mt-12">
            {/* Timeline line */}
            {/* <div className="absolute top-0 hidden w-1 h-full transform -translate-x-1/2 bg-gray-200 sm:block left-1/2"></div> */}

            <div className="relative space-y-8 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-8">
              {/* Timeline Item 1 */}
              <div className="sm:col-span-1">
                <div className="flex flex-col items-center text-right sm:items-end">
                  <div className="flex items-center justify-center w-16 h-16 text-gray-600 bg-gray-100 border-4 border-white rounded-full shadow-lg">
                    <BadgeDollarSign className="w-8 h-8" />
                  </div>
                  <div className="mt-4 sm:mr-6 sm:w-64">
                    <h3 className="text-lg font-semibold text-gray-900">
                      2022 - Founded
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Started with 5 team members in Mumbai, serving local
                      customers with genuine mobile products at fair prices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 2 - Center */}
              <div className="sm:col-span-1">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center w-16 h-16 text-gray-600 bg-gray-100 border-4 border-white rounded-full shadow-lg">
                    <MapPinned className="w-8 h-8" />
                  </div>
                  <div className="mt-4 sm:w-64">
                    <h3 className="text-lg font-semibold text-gray-900">
                      2023 - Expanded
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Launched our e-commerce platform with pan-India delivery
                      network, serving customers in 100+ cities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="sm:col-span-1">
                <div className="flex flex-col items-center text-left sm:items-start">
                  <div className="flex items-center justify-center w-16 h-16 text-gray-600 bg-gray-100 border-4 border-white rounded-full shadow-lg">
                    <Trophy className="w-8 h-8" />
                  </div>
                  <div className="mt-4 sm:ml-6 sm:w-64">
                    <h3 className="text-lg font-semibold text-gray-900">
                      2024 - Milestone
                    </h3>
                    <p className="mt-1 text-gray-600">
                      Awarded "Emerging Retailer of the Year" and served 10,000+
                      customers with 98% satisfaction rate.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
              The passionate people behind Cyber Mobile's success
            </p>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="relative p-6 transition-shadow duration-300 bg-white shadow-lg group rounded-xl hover:shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative">
                <img
                  className="w-32 h-32 mx-auto transition-all duration-300 rounded-full ring-4 ring-gray-200 group-hover:ring-gray-300"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Founder"
                />
                <h3 className="mt-6 text-lg font-semibold text-center text-gray-900">
                  Amit Verma
                </h3>
                <p className="text-sm text-center text-gray-500">
                  Founder & CEO
                </p>
                <p className="mt-3 text-sm text-center text-gray-600">
                  10+ years in tech retail. Passionate about bringing the latest
                  technology to customers at fair prices.
                </p>
              </div>
            </div>

            <div className="relative p-6 transition-shadow duration-300 bg-white shadow-lg group rounded-xl hover:shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative">
                <img
                  className="w-32 h-32 mx-auto transition-all duration-300 rounded-full ring-4 ring-gray-200 group-hover:ring-gray-300"
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Support Lead"
                />
                <h3 className="mt-6 text-lg font-semibold text-center text-gray-900">
                  Neha Sharma
                </h3>
                <p className="text-sm text-center text-gray-500">
                  Support Lead
                </p>
                <p className="mt-3 text-sm text-center text-gray-600">
                  Customer satisfaction expert with 8 years experience in
                  e-commerce support and service excellence.
                </p>
              </div>
            </div>

            <div className="relative p-6 transition-shadow duration-300 bg-white shadow-lg group rounded-xl hover:shadow-xl">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300 to-gray-100 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative">
                <img
                  className="w-32 h-32 mx-auto transition-all duration-300 rounded-full ring-4 ring-gray-200 group-hover:ring-gray-300"
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Tech Lead"
                />
                <h3 className="mt-6 text-lg font-semibold text-center text-gray-900">
                  Rahul Singh
                </h3>
                <p className="text-sm text-center text-gray-500">Tech Lead</p>
                <p className="mt-3 text-sm text-center text-gray-600">
                  Mobile technology specialist with deep knowledge of smartphone
                  hardware and software ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Customers Say
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-3">
            <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-600">
                "Super fast delivery and original products. I was skeptical
                about buying an expensive phone online, but Cyber Mobile's
                service was flawless. The device was brand new with all seals
                intact, and it arrived a day earlier than promised!"
              </blockquote>
              <div className="flex items-center mt-6">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  alt="Riya"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Riya Malhotra</p>
                  <p className="text-sm text-gray-500">Delhi</p>
                </div>
              </div>
            </div>

            <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-600">
                "Great prices and flexible EMI options. I got my new iPhone at a
                price lower than any other store, with 6 months no-cost EMI. The
                packaging was premium and the delivery executive even waited
                while I unboxed to check the device."
              </blockquote>
              <div className="flex items-center mt-6">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/men/75.jpg"
                  alt="Arjun"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Arjun Patel</p>
                  <p className="text-sm text-gray-500">Mumbai</p>
                </div>
              </div>
            </div>

            <div className="p-8 transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="italic text-gray-600">
                "Excellent customer support! When I had an issue with my device,
                they arranged for a technician to visit my home the next day.
                The problem was fixed on the spot under warranty. This level of
                after-sales service is rare in online shopping."
              </blockquote>
              <div className="flex items-center mt-6">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Sneha"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Sneha Reddy</p>
                  <p className="text-sm text-gray-500">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 mx-auto mt-2 bg-gray-500"></div>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-600">
              Can't find what you're looking for?{" "}
              <a
                href="/contact"
                className="font-medium text-gray-600 hover:text-gray-500"
              >
                Contact our support team
              </a>
              .
            </p>
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden border border-gray-200 rounded-lg"
                >
                  <button
                    className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-center">
                      <div className="flex-shrink-0 mr-4 text-gray-500">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.question}
                      </h3>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                      activeIndex === index ? "block" : "hidden"
                    }`}
                  >
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-zinc-800">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to upgrade your mobile experience?
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-xl text-gray-300">
              Join thousands of satisfied customers who trust Cyber Mobile for
              their smartphone needs.
            </p>
            <div className="flex justify-center mt-8">
              <div className="inline-flex rounded-md shadow">
                <Button
                  label="Shop Now"
                  className="text-white border-white"
                  variant="outline"
                  // href="/shop"
                  // className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-gray-900 bg-gray-400 border border-transparent rounded-md hover:bg-gray-500 md:py-4 md:text-lg md:px-10"
                >
                  Shop Now
                </Button>
              </div>
              <div className="inline-flex ml-3">
                <Button label="contact" href="/contact"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
