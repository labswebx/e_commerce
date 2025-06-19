import {
  BadgeCheck,
  BadgeDollarSign,
  LockKeyhole,
  MapPinned,
  ShieldCheck,
  Trophy,
  Truck,
} from "lucide-react";
import Accordion from "../../components/ui/Accordion";

const About = () => {
  const faqItems = [
    {
      title: "Do you offer Cash on Delivery?",
      content:
        "Yes, we offer Cash on Delivery in selected pin codes across India. You’ll see the option during checkout if available in your area.",
    },
    {
      title: "How do I track my order?",
      content:
        "After placing an order, you will receive a tracking link via email and SMS. You can also track it from your account dashboard.",
    },
    {
      title: "What if I receive a damaged product?",
      content:
        "We offer a 7-day return policy. Contact our support immediately with photos, and we will replace or refund the product.",
    },
  ];

  return (
    <div className="px-6 py-12 text-gray-900 bg-white md:px-20">
      <div className="max-w-6xl mx-auto space-y-16">
        {/*  Section 1: Hero + Intro */}
        <section
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900">
            Welcome to Cyber
          </h1>
          <div className="w-20 h-1 mx-auto mb-6 bg-gray-800"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Your trusted online destination for smartphones, accessories, and
            wearables. Cyber is here to upgrade your mobile lifestyle with
            quality, speed, and trust.
          </p>
        </section>

        {/*  Section 2: Mission / Vision */}
        <section
          className="p-8 border border-gray-200 rounded-lg bg-gray-50"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Our Mission & Vision
          </h2>
          <div className="w-12 h-1 mb-4 bg-gray-800"></div>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                Mission
              </h3>
              <p className="leading-relaxed text-gray-700">
                At{" "}
                <strong className="font-semibold text-gray-900">Cyber</strong>,
                we aim to make mobile technology accessible, affordable, and
                reliable for everyone. Our goal is to empower users with the
                latest tech and unmatched customer service — wherever you are in
                India.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">Vision</h3>
              <p className="leading-relaxed text-gray-700">
                To become India's most trusted mobile technology platform,
                revolutionizing how people discover, purchase, and experience
                mobile devices through innovation and customer-first approach.
              </p>
            </div>
          </div>
        </section>

        {/*  Section 3: What We Offer */}
        <section className="grid items-center gap-10 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
            alt="Cyber Store"
            className="object-cover w-full h-full rounded-lg shadow-lg"
            data-aos="fade-right"
          />
          <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-2xl font-semibold text-gray-900">
              What We Offer
            </h2>
            <div className="w-12 h-1 bg-gray-800"></div>
            <ul className="pl-5 space-y-3 text-gray-700 list-disc">
              <li className="text-gray-800">
                <strong className="font-semibold">Smartphones</strong> – Latest
                models from top brands with competitive pricing
              </li>
              <li className="text-gray-800">
                <strong className="font-semibold">Accessories</strong> – Premium
                earphones, fast chargers, designer covers, and more
              </li>
              <li className="text-gray-800">
                <strong className="font-semibold">Wearables</strong> –
                Smartwatches, fitness bands with health monitoring features
              </li>
              <li className="text-gray-800">
                <strong className="font-semibold">Services</strong> –
                <ul className="pl-5 mt-2 space-y-2 list-disc">
                  <li>Flexible EMI options</li>
                  <li>Seamless device exchange</li>
                  <li>Extended warranty support</li>
                  <li>Free and fast delivery</li>
                  <li>7-day easy returns</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/*  Section 4: Why Choose Cyber */}
        <section
          className="p-8 bg-gray-700 rounded-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="mb-6 text-2xl font-semibold text-white">
            Why Choose Cyber?
          </h2>
          <div className="w-12 h-1 mb-6 bg-white"></div>
          <div className="grid gap-8 text-center text-gray-300 sm:grid-cols-2 md:grid-cols-4">
            <div
              className="p-4 transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 text-2xl bg-gray-800 rounded-full">
                <ShieldCheck size={32} color="#4bf81b" absoluteStrokeWidth />
              </div>
              <p className="font-medium text-white">100% Genuine Products</p>
              <p className="mt-1 text-xs">With manufacturer warranty</p>
            </div>
            <div
              className="p-4 transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 text-2xl bg-gray-800 rounded-full">
                <Truck size={32} color="#3b82f6" absoluteStrokeWidth />
              </div>
              <p className="font-medium text-white">Fast Delivery</p>
              <p className="mt-1 text-xs">Same-day in major cities</p>
            </div>
            <div
              className="p-4 transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 text-2xl bg-gray-800 rounded-full">
                <LockKeyhole size={32} color="#6366f1" absoluteStrokeWidth />
              </div>
              <p className="font-medium text-white">Secure Payments</p>
              <p className="mt-1 text-xs">256-bit encryption</p>
            </div>
            <div
              className="p-4 transition-transform hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-3 text-2xl bg-gray-800 rounded-full">
                <BadgeCheck size={32} color="#facc15" absoluteStrokeWidth />
              </div>
              <p className="font-medium text-white">Trusted Brands</p>
              <p className="mt-1 text-xs">Official partners</p>
            </div>
          </div>
        </section>

        {/*  Section 5: Stats */}
        <section className="p-8 bg-white " data-aos="fade-up">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-900">
            Cyber in Numbers
          </h2>
          <div className="w-12 h-1 mx-auto mb-8 bg-gray-800"></div>
          <div className="grid gap-8 text-center sm:grid-cols-2 md:grid-cols-4">
            <div data-aos="zoom-in" data-aos-delay="100">
              <p className="text-4xl font-bold text-gray-900">10,000+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="150">
              <p className="text-4xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600">Brands Available</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <p className="text-4xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Products Listed</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="250">
              <p className="text-4xl font-bold text-gray-900">24/7</p>
              <p className="text-gray-600">Customer Support</p>
            </div>
          </div>
        </section>

        {/*  Section 6: Horizontal Timeline */}
        <section className="text-center" data-aos="fade-up">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Our Journey
          </h2>
          {/* <div className="w-12 h-1 mx-auto mb-8 bg-gray-800"></div> */}

          <div className="relative max-w-6xl px-4 mx-auto sm:flex">
            {/* Timeline line */}

            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
              {/* Timeline Item 1 */}
              <div className="flex flex-col items-center" data-aos="fade-up">
                <div className="">
                  <BadgeDollarSign />
                </div>
                <div className="w-full p-4 rounded-lg shadow-sm bg-gray-50">
                  <h3 className="font-semibold text-gray-900">
                    2022 - Founded
                  </h3>
                  <p className="text-sm text-gray-600">
                    Started with 5 team members in Mumbai
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="">
                  <MapPinned />
                </div>
                <div className="w-full p-4 rounded-lg shadow-sm bg-gray-50">
                  <h3 className="font-semibold text-gray-900">
                    2023 - Expanded
                  </h3>
                  <p className="text-sm text-gray-600">
                    Launched pan-India delivery network
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="">
                  <Trophy />
                </div>
                <div className="w-full p-4 rounded-lg shadow-sm bg-gray-50">
                  <h3 className="font-semibold text-gray-900">
                    2024 - Milestone
                  </h3>
                  <p className="text-sm text-gray-600">
                    Served 10,000+ customers with 98% satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*  Section 7: Team */}
        <section className="p-8 " data-aos="fade-up">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Meet Our Team
          </h2>
          <div className="w-12 h-1 mb-6 bg-gray-800"></div>
          <p className="mb-8 text-gray-700">
            Cyber was founded by a team of tech enthusiasts who believe in
            simplifying mobile shopping. Our support team is always ready to
            help — from order to delivery.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div
              className="p-6 text-center transition-all bg-white rounded-lg shadow-sm hover:shadow-md"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Founder"
                className="w-24 h-24 mx-auto mb-4 rounded-full ring-2 ring-gray-300"
              />
              <p className="mt-2 font-semibold text-gray-900">Amit Verma</p>
              <p className="text-sm text-gray-500">Founder & CEO</p>
              <p className="mt-2 text-sm text-gray-600">
                10+ years in tech retail
              </p>
            </div>
            <div
              className="p-6 text-center transition-all bg-white rounded-lg shadow-sm hover:shadow-md"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Support"
                className="w-24 h-24 mx-auto mb-4 rounded-full ring-2 ring-gray-300"
              />
              <p className="mt-2 font-semibold text-gray-900">Neha Sharma</p>
              <p className="text-sm text-gray-500">Support Lead</p>
              <p className="mt-2 text-sm text-gray-600">
                Customer satisfaction expert
              </p>
            </div>
            <div
              className="p-6 text-center transition-all bg-white rounded-lg shadow-sm hover:shadow-md"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <img
                src="https://randomuser.me/api/portraits/men/45.jpg"
                alt="Tech Head"
                className="w-24 h-24 mx-auto mb-4 rounded-full ring-2 ring-gray-300"
              />
              <p className="mt-2 font-semibold text-gray-900">Rahul Singh</p>
              <p className="text-sm text-gray-500">Tech Lead</p>
              <p className="mt-2 text-sm text-gray-600">
                Mobile technology specialist
              </p>
            </div>
          </div>
        </section>

        {/*  Section 8: Testimonials / Trust */}
        <section className="p-8 bg-gray-100 rounded-lg" data-aos="fade-up">
          <h2 className="mb-8 text-2xl font-semibold text-center text-gray-900">
            What Our Customers Say
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div
              className="p-6 text-sm bg-white rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                "Super fast delivery and original products. Cyber is my go-to
                store now!"
              </p>
              <p className="mt-4 font-semibold text-right text-gray-900">
                – Riya, Delhi
              </p>
            </div>
            <div
              className="p-6 text-sm bg-white rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                "Great prices and EMI options. Loved the packaging too."
              </p>
              <p className="mt-4 font-semibold text-right text-gray-900">
                – Arjun, Mumbai
              </p>
            </div>
            <div
              className="p-6 text-sm bg-white rounded-lg shadow-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="italic text-gray-700">
                "Customer support is excellent. They helped me exchange my
                device easily."
              </p>
              <p className="mt-4 font-semibold text-right text-gray-900">
                – Sneha, Bangalore
              </p>
            </div>
          </div>
        </section>

        {/*  Section 9: Call to Action */}
        <section className="mt-10 text-center" data-aos="fade-up">
          <h3 className="mb-4 text-xl font-semibold text-gray-900">
            Ready to explore your next phone?
          </h3>
          <p className="max-w-2xl mx-auto mb-6 text-gray-600">
            Join thousands of satisfied customers who trust Cyber for their
            mobile needs.
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-3 font-medium text-white transition-all bg-gray-900 rounded-lg shadow hover:bg-gray-800 hover:shadow-md"
            data-aos="zoom-in"
          >
            Start Shopping with Cyber
          </a>
        </section>

        {/* Section 10: FAQs Accordion */}
        <section className="p-2 bg-white" data-aos="fade-up">
          <h2 className="mb-6 text-2xl font-semibold text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-1 mx-auto mb-8 bg-gray-800"></div>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqItems} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
