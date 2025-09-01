import React from "react";

const EventsHero = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white flex items-center justify-center min-h-screen"
      style={{ backgroundImage: "url('/mainhero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          FlivoAI Global Events <br className="hidden sm:block" /> Ignite Your
          Innovation
        </h1>

        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-medium text-gray-200">
          Explore the future of AI with our exclusive global sessions and
          summits.
        </p>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg font-semibold text-gray-300 leading-relaxed">
          Flivo AI presents a handpicked list of the world’s most exciting AI
          events, aimed at informing and inspiring you. From educational
          workshops on neural networks and machine learning to interactive
          hackathons and conferences conducted by experts, our events unite
          innovators, developers, and enthusiasts to chart the future course of
          artificial intelligence. Join us to discover new developments,
          collaborate with industry masters, and explore new possibilities in
          the AI environment.
        </p>

        <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition">
          Get Event Updates
        </button>
      </div>
    </section>
  );
};

export default EventsHero;
