import React, { useState } from "react";
import Footer from "./layout/Footer";
import NavAi from "./layout/NavAi";

const faqs = [
  {
    question: "What's the dress code?",
    answer:
      "Business casual is encouraged, but feel free to arrive in attire that makes you feel confident and professional. The event will include media coverage and photography, dress accordingly if representing your company.",
  },
  {
    question: "Will session recordings be available?",
    answer:
      "Yes, all sessions will be recorded and made available to registered participants after the event.",
  },
  {
    question: "Do you offer student passes?",
    answer:
      "Yes, discounted student passes are available with valid student identification. Please check our registration page for details.",
  },
  {
    question: "Are meals included in the ticket?",
    answer:
      "Yes. Breakfast, lunch and coffee breaks are included each day of the summit. We also provide vegetarian and dietary accommodations, please specify any preferences during registration.",
  },
  {
    question: "How can I become a sponsor?",
    answer:
      "We'd love to hear from you. Please reach out to connect@flivo.ai for current sponsorship opportunities.",
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "Yes. In addition to scheduled sessions, we've included dedicated networking breaks, a Founders' Lounge and an invite-only Leadership Dinner for deeper conversations and collaboration.",
  },
  {
    question: "Where is the summit taking place?",
    answer:
      "The event will be held at McCormick Place, Chicago, one of the largest and most connected convention centers in North America. Venue details and access instructions will be emailed to all attendees.",
  },
  {
    question: "Do I need to bring anything?",
    answer:
      "Just your event confirmation email (QR code) and a government-issued photo ID. Laptops or tablets are optional but recommended for workshops and note-taking.",
  },
  {
    question: "Is there a code of conduct?",
    answer:
      "Yes. FlivoAI events are designed to be professional, inclusive and harassment-free. All participants are expected to follow our Code of Conduct, available on the registration portal.",
  },
];

const FlipCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[280px] h-[360px] perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front */}
        <div
          className="absolute border-2 rounded-2xl  inset-0 bg-cover bg-center overflow-hidden text-white flex flex-col items-center justify-center backface-hidden"
          style={{ backgroundImage: "url('/pngs/cardbg.png')" }}
        >
          <div className="absolute inset-0 bg-black/70 rounded-xl" />
          <img
            src="/svgs/design.svg"
            alt="logo"
            className="absolute top-4 right-4 h-8"
          />
          <p className="relative z-10 text-2xl md:text-3xl font-bold text-center px-4">
            {question}
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-cover bg-center border-2 rounded-2xl overflow-hidden text-white flex items-center justify-center backface-hidden rotate-y-180"
          style={{ backgroundImage: "url('/pngs/cardbg.png')" }}
        >
          <div className="absolute inset-0 bg-black/70 rounded-xl" />
          <img
            src="/svgs/design.svg"
            alt="logo"
            className="absolute top-4 right-4 h-8"
          />
          <p className="relative z-10 text-lg font-medium leading-relaxed px-6 text-center">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQAi = () => {
  return (
    <div>
      <NavAi />

      {/* one */}
      <section className="relative w-full bg-black text-white overflow-hidden pt-2">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>

        {/* Background Images */}
        <div className="absolute inset-0 flex gap-2 sm:gap-5">
          {/* Left Image (hidden on mobile) */}
          <div
            className=" md:block w-1/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/pngs/faqleft.png')" }}
          ></div>

          {/* Center Image */}
          <div
            className="w-full md:w-4/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/pngs/faqmid.png')" }}
          ></div>

          {/* Right Image (hidden on mobile) */}
          <div
            className=" md:block w-1/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/pngs/faqright.png')" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 md:py-20 lg:py-28">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl text-gray-200 mb-8 text-xs sm:text-sm md:text-base font-semibold gap-3 md:gap-0">
            <div className="flex sm:flex-row gap-19 sm:gap-10 md:gap-130">
              <span className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl">
                August 31, 2025
              </span>
              <span className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl">
                9am - 6pm GMT
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] font-extrabold text-white/80 leading-tight tracking-tight">
            FAQ
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 max-w-2xl sm:max-w-3xl">
            Enterprise AI Summit 2025 Revealing Untapped $3 Trillion
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-xl  text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-gray-200 md:min-w-[1200px]">
            Join global tech leaders in Chicago this August as we uncover how
            enterprise can unlock trillion-dollor opportubities with GenAI.LLMs
            and intelligent automation
          </p>

          {/* CTA Button */}
          <button className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg shadow-lg shadow-blue-700/40 transition">
            Register now
          </button>
        </div>
      </section>

      {/* two */}
      <section
        className="relative p-4 w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/pngs/faqright.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/80" />

        {/* Content */}
        <div className="relative flex flex-col items-center mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="text-center flex flex-col gap-4 p-6">
            <p className="font-bold text-4xl md:text-6xl">
              Frequently Asked Questions
            </p>
            <p className="font-semibold text-lg md:text-2xl max-w-[900px] mx-auto">
              Everything you need to know before arriving in San Francisco for
              the Enterprise AI Summit 2025.
            </p>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:min-w-[1000px] gap-9 py-8">
            {faqs.map((faq, idx) => (
              <FlipCard key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* three */}
      <section
        className="relative w-full flex items-center justify-center text-white py-16"
        style={{
          backgroundImage: "url('/pngs/torright.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 px-6 md:px-12 w-full max-w-6xl flex flex-col-reverse md:flex-row items-center md:items-start gap-10 bg-black/40 backdrop-blur-sm py-10 rounded-xl">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 p-6 md:p-8 rounded-lg shadow-lg bg-black/30">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Contact Us
            </h2>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-white/90 text-black focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-white/90 text-black focus:outline-none"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-md bg-white/90 text-black focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 rounded-md bg-white/90 text-black focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-[#60A5FA] to-[#396294] text-white py-3 px-6 rounded-md text-xl font-bold hover:opacity-90 transition"
              >
                Let’s Connect
              </button>
            </form>
          </div>

          {/* Logo & Event Info */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/pngs/flivo.png"
              alt="Flivo Logo"
              className="h-16 md:h-24 mb-6"
            />
            <h3 className="text-4xl md:text-8xl ">Enterprise AI Summit 2025</h3>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQAi;
