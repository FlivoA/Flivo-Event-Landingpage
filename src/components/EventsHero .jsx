import React, { useState } from "react";
import { Mail } from "lucide-react";

const EventsHero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed Email:", email);
    setIsOpen(false);
  };

  return (
    <section
      className="relative bg-cover bg-center text-white flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/mainhero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          FlivoAI Global Events <br className="hidden sm:block" /> Ignite Your
          Innovation
        </h1>

        <p className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-2xl font-medium text-gray-200">
          Explore the future of AI with our exclusive global sessions and
          summits.
        </p>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-semibold text-gray-300 ">
          Flivo AI presents a handpicked list of the world’s most exciting AI
          events, aimed at informing and inspiring you. From educational
          workshops on neural networks and machine learning to interactive
          hackathons and conferences conducted by experts, our events unite
          innovators, developers, and enthusiasts to chart the future course of
          artificial intelligence. Join us to discover new developments,
          collaborate with industry masters, and explore new possibilities in
          the AI environment.
        </p>

        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-white text-black font-medium cursor-pointer hover:bg-gray-200 transition"
        >
          Get Event Updates
        </button>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#111] text-white rounded-2xl p-6 sm:p-8 w-[90%] max-w-md shadow-lg relative">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center">
              Don’t Miss Out!
            </h2>
            <p className="text-blue-400 text-center mb-4">
              Get Latest Event Updates
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center border border-gray-600 rounded-md px-3 py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent outline-none flex-1 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Mail className="w-5 h-5 text-gray-400" />
              </div>

              <button
                type="submit"
                className="w-full py-2 rounded-md font-medium bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition"
              >
                Join Now
              </button>
            </form>

            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full py-2 rounded-md bg-gray-800 hover:bg-gray-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsHero;
