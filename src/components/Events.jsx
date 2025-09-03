import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const cardInfo1 = [
  {
    img: "/vegas.jpg",
    name: "Beijing",
    location: "Beijing",
    date: "Sep 6, 2025",
    place: "China National Convention Center, Beijing",
    type: "In-Person event",
  },
  {
    img: "/vegas2.jpg",
    name: "Seattle",
    location: "Seattle",
    date: "Sep 6, 2025",
    place: "Seattle Convention Center | Arch, Seattle",
    type: "In-Person event",
  },
  {
    img: "/vegas3.jpg",
    name: "Montreal",
    location: "Montreal",
    date: "Sep 13, 2025",
    place: "Palais des Congrès de Montréal, Montreal",
    type: "In-Person event",
  },
  {
    img: "/boston3.jpg",
    name: "Berlin",
    location: "Berlin",
    date: "Sep 20, 2025",
    place: "ECC Berlin (Estrel Congress Center), Berlin",
    type: "In-Person event",
  },
  {
    img: "/vegas5.jpg",
    name: "Los Angeles",
    location: "Los Angeles",
    date: "Sep 28, 2025",
    place: "Los Angeles Convention Center, Los Angeles",
    type: "In-Person event",
  },
];
const cardInfo2 = [
  {
    img: "/tor.jpg",
    name: "London",
    location: "London",
    date: "Sep 7, 2025",
    place: "Excel London, London",
    type: "In-Person event",
  },
  {
    img: "/tor1.jpg",
    name: "Singapore",
    location: "Singapore",
    date: "Sep 14, 2025",
    place: "Sands Expo & Convention Centre, Singapore",
    type: "In-Person event",
  },
  {
    img: "/boston1.jpg",
    name: "Dubai",
    location: "Dubai",
    date: "Sep 21, 2025",
    place: "Dubai World Trade Centre, Dubai",
    type: "In-Person event",
  },
  {
    img: "/tor4.jpg",
    name: "San Francisco",
    location: "San Francisco",
    date: "Sep 27, 2025",
    place: "Moscone Center, San Francisco",
    type: "In-Person event",
  },
];
const cardInfo3 = [
  {
    img: "/boston.jpg",
    name: "BOSTON",
    location: "Boston",
    date: "Oct 12, 2025",
    place: "The Westin Copley Place, Boston",
    type: "In-Person event",
  },

  {
    img: "/boston7.jpg",
    name: "Dubai",
    location: "Dubai",
    date: "Oct 19, 2025",
    place: "Dubai World Trade Centre, Dubai",
    type: "In-Person event",
  },
  {
    img: "/boston3.jpg",
    name: "Berlin",
    location: "Berlin",
    date: "Oct 26, 2025",
    place: "Sprecogeld Bikini Berlin, Berlin",
    type: "In-Person event",
  },
  {
    img: "/boston2.jpg",
    name: "Seattle",
    location: "Seattle",
    date: "Nov 2, 2025",
    place: "W Seattle, Seattle",
    type: "In-Person event",
  },
  {
    img: "/boston5.jpg",
    name: "Vancouver",
    location: "Vancouver",
    date: "Nov 9, 2025",
    place: "BCIT Downtown Campus, Vancouver",
    type: "In-Person event",
  },
  {
    img: "/boston6.jpg",
    name: "Tokyo",
    location: "Tokyo",
    date: "Nov 16, 2025",
    place: "Tokyo International Forum, Tokyo",
    type: "In-Person event",
  },
  {
    img: "/boston3.jpg",
    name: "Sydney",
    location: "Sydney",
    date: "Nov 23, 2025",
    place: "ICC Sydney, Sydney",
    type: "In-Person event",
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
      className="relative w-full overflow-hidden border-1 border-white shadow-lg mb-8 transition-all duration-500"
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
        <div className="flex flex-col justify-between md:flex-row gap-6 mt-6">
          {/* Location & Description */}
          <div className="w-full md:max-w-[525px] border px-4 backdrop-blur-sm  sm:px-6 py-4 rounded-xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase bg-gradient-to-b from-[#F5F5F5] to-[#8F8F8F] bg-clip-text text-transparent">
              {cardArray[activeIndex]?.location}
            </h3>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-b from-[#F5F5F5] to-[#8F8F8F] bg-clip-text text-transparent">
              {cardArray[activeIndex]?.place}
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
        <div className="flex items-center gap-2 px-3 py-2 w-full sm:max-w-[300px] bg-[#0F0F0F] text-[#4B5563] border-1 border-[#4B5563] rounded mb-4">
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
          className="relative flex  sm:flex-row items-center justify-between gap-4 px-4 py-6 sm:px-6 sm:py-4 border-2 border-white overflow-hidden"
          style={{
            backgroundImage: "url('/mainhero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img src="/flivo.png" alt="Flivo Logo" className="h-10 sm:h-20" />
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-black text-center">
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
        <div className="flex flex-col md:flex-row text-white min-h-screen  gap-6 py-6">
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
              bgImage="/mtorronto.jpg"
              title="Beyond Automation: Intelligent AI Agent"
              subtitle="Live in Toronto, Montreal, Beijing, Berlin & Bengaluru—this global tour explores how intelligent AI agents are redefining enterprise strategy beyond automation."
              cardArray={cardInfo1}
            />
            <EventCard
              bgImage="/lasvegas.jpg"
              title="Enterprise AI Summit 2025 – Revealing the Untapped $3 Trillion"
              subtitle="A global tour across Las Vegas, SF, NYC, London, Singapore & Dubai—where AI leaders unlock the next $3T enterprise AI revolution through strategy, innovation, and real-world use cases."
              cardArray={cardInfo2}
            />

            <EventCard
              bgImage="/boston.jpg"
              title="Enterprise LLM Security in the Age of AI Transformation"
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
