import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const cardInfo1 = [
  {
    img: "/vegas.jpg",
    name: "LAS VEGAS",
    location: "Las Vegas",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/vegas2.jpg",
    name: "SAN FRANCISCO",
    location: "San Francisco",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/vegas3.jpg",
    name: "NEW YORK",
    location: "New York",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/boston7.jpg",
    name: "LONDON",
    location: "London",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/vegas5.jpg",
    name: "DUBAI",
    location: "Dubai",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/boston7.jpg",
    name: "BOSTON",
    location: "Boston",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
];
const cardInfo2 = [
  {
    img: "/tor.jpg",
    name: "LAS VEGAS",
    location: "Las Vegas",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/tor1.jpg",
    name: "SAN FRANCISCO",
    location: "San Francisco",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/tor2.jpg",
    name: "NEW YORK",
    location: "New York",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/tor4.jpg",
    name: "LONDON",
    location: "London",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/vegas4.jpg",
    name: "DUBAI",
    location: "Dubai",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
];
const cardInfo3 = [
  {
    img: "/boston.jpg",
    name: "BOSTON",
    location: "Boston",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },

  {
    img: "/boston3.jpg",
    name: "NEW YORK",
    location: "New York",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/boston4.jpg",
    name: "LONDON",
    location: "London",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/boston2.jpg",
    name: "SAN FRANCISCO",
    location: "San Francisco",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
  {
    img: "/boston5.jpg",
    name: "DUBAI",
    location: "Dubai",
    description:
      "Hosted by FlivoAI at Chicago’s McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow’s enterprise AI playbook begins.",
  },
];

const EventCard = ({ bgImage, title, subtitle, cardArray }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardArray.length);
    }, 3000); // auto scroll every 3s
    return () => clearInterval(interval);
  }, [cardArray.length]);

  // Scroll to active card
  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild?.offsetWidth || 200;
      carouselRef.current.scrollTo({
        left: activeIndex * (cardWidth + 16), // including gap
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden shadow-lg mb-8 transition-all duration-500"
      style={{
        backgroundImage: `url(${cardArray[activeIndex]?.img || bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[#131313a3]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-6 text-white">
        {/* Header */}
        <div className="text-center mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase bg-gradient-to-b from-[#F5F5F5] to-[#8F8F8F] bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-medium mt-1 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Location & Description + Carousel Wrapper */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {/* Location & Description */}
          <div className="w-full md:max-w-[525px] border px-4 backdrop-blur-sm  sm:px-6 py-4 rounded-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase bg-gradient-to-b from-[#F5F5F5] to-[#8F8F8F] bg-clip-text text-transparent">
              {cardArray[activeIndex]?.location}
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-b from-[#F5F5F5] to-[#8F8F8F] bg-clip-text text-transparent">
              {cardArray[activeIndex]?.description}
            </p>
            <button className="mt-4 px-4 py-2 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition">
              <Link to="/event">Explore Event</Link>
            </button>
          </div>

          {/* Carousel */}
          <div className="w-full md:w-[420px] md:mt-10">
            <div className="relative">
              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0 ? cardArray.length - 1 : prev - 1
                  )
                }
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronLeft size={20} />
              </button>

              <div
                ref={carouselRef}
                className="flex gap-4 overflow-x-hidden px-6 sm:px-8 no-scrollbar "
              >
                {cardArray.map((event, idx) => (
                  <div
                    key={idx}
                    className={`min-w-[140px] sm:min-w-[180px] h-[160px] sm:h-[200px] rounded-lg overflow-hidden border border-gray-300 relative cursor-pointer transition-transform duration-300 ${
                      activeIndex === idx ? "scale-100" : "scale-85 opacity-70"
                    }`}
                    style={{
                      backgroundImage: `url(${event.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-around p-2">
                      <img
                        src="/design.svg"
                        alt="logo"
                        height={30}
                        width={30}
                      />
                      <p className="text-md sm:text-xl font-semibold uppercase  text-white">
                        {event.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveIndex((prev) => (prev + 1) % cardArray.length)
                }
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div
      className="relative flex flex-col min-h-screen"
      style={{
        backgroundImage: "url('/vegas3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#131313cc]" />

      <div className="relative z-10 flex flex-col p-4 sm:p-6 lg:p-8">
        {/* Search Bar */}
        <div className="flex items-center gap-2 px-3 py-2 w-full sm:max-w-[300px] bg-[#0F0F0F] text-[#4B5563] rounded mb-4">
          <img src="/glass.svg" alt="search" height={15} width={15} />
          <div className="border-l-2 border-[#4B5563] h-4" />
          <input
            type="text"
            placeholder="Search Event"
            className="flex-1 bg-transparent outline-none text-white px-2 text-sm"
          />
        </div>

        {/* Hero Section */}
        <div
          className="relative flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-6 sm:px-6 sm:py-4 rounded-xl overflow-hidden"
          style={{
            backgroundImage: "url('/mainhero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="/flivo.png" alt="Flivo Logo" className="h-14 sm:h-20" />
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-black text-center">
            FLIVO AI EVENTS
          </h1>
          <img
            src="/design.svg"
            height={70}
            width={40}
            alt="Icon"
            className="sm:relative sm:left-5 sm:bottom-4 h-12 sm:h-16"
          />
        </div>

        {/* Filters + Cards */}
        <div className="flex flex-col md:flex-row text-white min-h-screen gap-6 py-6">
          {/* Sidebar Filters */}
          <aside className="hidden md:block w-1/4 bg-[#1E1E1E] max-w-[270px] max-h-[700px] rounded-xl  overflow-y-auto border">
            {/* Sidebar content same as before... */}
            <h3 className="text-lg font-semibold px-4 pt-2 mb-4">Filter By</h3>
            {/* ... (rest of filter list unchanged) */}
            <div>
              <hr />
              <h4 className="text-2xl mb-2 px-6 font-bold text-[#A3BFFA]">
                Events
              </h4>
              <hr />
              <ul
                className="flex flex-col gap-1 px-3 p-1 text-sm text-gray-300
                "
              >
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Live</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Past</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Upcoming Online</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Upcoming In-person</li>
                </div>
              </ul>
            </div>
            <div>
              <hr />
              <h4 className="text-2xl mb-2 px-6 font-bold text-[#A3BFFA]">
                Topics
              </h4>
              <hr />
              <ul
                className="flex flex-col gap-1 px-3 p-1 text-sm text-gray-300
                "
              >
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Beyond Automation</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Intelligent AI Agents </li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Future of AI Innovation </li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Enterprise LLM Security </li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>AI Transformation Strategy </li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>AI ROI & $3 Trillion Impact </li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>AI Governance & Compliance </li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Enterprise AI Implementation </li>
                </div>
              </ul>
            </div>
            <div>
              <hr />
              <h4 className="text-2xl mb-2 px-6 font-bold text-[#A3BFFA]">
                Locations
              </h4>
              <hr />
              <ul className="flex flex-col gap-1 px-3 p-1 text-sm text-gray-300">
                <div className="flex gap-3 items-center ">
                  <input type="checkbox" name="live" id="" />
                  <li>USA</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>China</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Canada</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Germany</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Australia</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>Singapore</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>United State</li>
                </div>
                <div className="flex gap-3 ">
                  <input type="checkbox" name="live" id="" />
                  <li>United Kingdom</li>
                </div>
              </ul>
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 px-4 py-2 bg-[#1E1E1E] text-white rounded-md mb-4"
          >
            <SlidersHorizontal size={18} /> Filters
          </button>
          {showFilters && (
            <aside className="md:hidden bg-[#1E1E1E] rounded-xl p-4 mb-4">
              {/* Same filter content here for mobile */}
              <h3 className="text-lg font-semibold mb-4">Filter By</h3>
              <div>
                <hr />
                <h4 className="text-2xl mb-2 px-6 font-bold text-[#A3BFFA]">
                  Events
                </h4>
                <hr />
                <ul
                  className="flex flex-col gap-1 px-3 p-1 text-sm text-gray-300
                "
                >
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Live</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Past</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Upcoming Online</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Upcoming In-person</li>
                  </div>
                </ul>
              </div>

              <div>
                <hr />
                <h4 className="text-2xl mb-2 px-6 font-bold text-[#A3BFFA]">
                  Topics
                </h4>
                <hr />
                <ul
                  className="flex flex-col gap-1 px-3 p-1 text-sm text-gray-300
                "
                >
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Beyond Automation</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Intelligent AI Agents </li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Future of AI Innovation </li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Enterprise LLM Security </li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>AI Transformation Strategy </li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>AI ROI & $3 Trillion Impact </li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>AI Governance & Compliance </li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Enterprise AI Implementation </li>
                  </div>
                </ul>
              </div>
              <div>
                <hr />
                <h4 className="text-2xl mb-2 px-6 font-bold text-[#A3BFFA]">
                  Locations
                </h4>
                <hr />
                <ul className="flex flex-col gap-1 px-3 p-1 text-sm text-gray-300">
                  <div className="flex gap-3 items-center ">
                    <input type="checkbox" name="live" id="" />
                    <li>USA</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>China</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Canada</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Germany</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Australia</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>Singapore</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>United State</li>
                  </div>
                  <div className="flex gap-3 ">
                    <input type="checkbox" name="live" id="" />
                    <li>United Kingdom</li>
                  </div>
                </ul>
              </div>
            </aside>
          )}

          {/* Event Cards */}
          <main className="flex-1 space-y-8">
            <EventCard
              bgImage="/lasvegas.jpg"
              title="Enterprise AI Summit 2025"
              subtitle="A global tour across Las Vegas, SF, NYC, London, Singapore & Dubai—where AI leaders unlock the next $3T enterprise AI revolution through strategy, innovation, and real-world use cases."
              cardArray={cardInfo1}
            />
            <EventCard
              bgImage="/mtorronto.jpg"
              title="Beyond Automation: Intelligent AI Agent"
              subtitle="Live in Toronto, Montreal, Beijing, Berlin & Bengaluru—this global tour explores how intelligent AI agents are redefining enterprise strategy beyond automation."
              cardArray={cardInfo2}
            />
            <EventCard
              bgImage="/boston.jpg"
              title="Beyond Automation: Intelligent AI Agent"
              subtitle="Live in Toronto, Montreal, Beijing, Berlin & Bengaluru—this global tour explores how intelligent AI agents are redefining enterprise strategy beyond automation."
              cardArray={cardInfo3}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Events;
