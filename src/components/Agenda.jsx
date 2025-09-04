import React from "react";
import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

const scheduleData = [
  {
    start: "09:00 AM",
    end: "09:30 AM",
    description: "Check-in & Coffee Networking",
  },
  {
    start: "09:30 AM",
    end: "09:45 AM",
    title: "Keynote",
    subtitle: "Opening Host",
    description: "Welcome Address: The Rise of Strategic AI Agents",
  },
  {
    start: "09:45 AM",
    end: "10:30 AM",
    title: "Panel",
    description: "AI in the Boardroom: Driving $3 Trillion in Value",
  },
  {
    start: "10:30 AM",
    end: "11:15 AM",
    title: "Keynote",
    description: "The Trust Factor: Ethics, Data & Responsible AI",
  },
  {
    start: "11:15 AM",
    end: "11:30 AM",
    description: "Tea Break & Exhibitor Demos",
  },
  {
    start: "11:30 AM",
    end: "12:15 PM",
    title: "Workshop",
    description: "Prompt Engineering for Enterprise Workflows",
  },
  {
    start: "12:15 PM",
    end: "01:00 PM",
    title: "Fireside Chat",
    description: "AI + Health = Futureproof",
  },
  {
    start: "01:00 PM",
    end: "02:00 PM",
    title: "Workshop",
    description: "Networking Lunch & VIP Lounge Opens (Invite Only)",
  },
  {
    start: "02:00 PM",
    end: "02:45 PM",
    title: "Keynote",
    description: "Deep Learning, Real Impact: From MVPs to Billion Dollar Ops",
  },
  {
    start: "02:45 PM",
    end: "03:30 PM",
    title: "Panel",
    description: "Founders in AI: Building the Next Unicorn",
  },
  {
    start: "03:30 PM",
    end: "04:00 PM",
    title: "Spotlight talk",
    description: "AGI or Hype? Inside DeepMind's Long Game",
  },
  {
    start: "04:00 PM",
    end: "05:00 PM",
    description: "Open Networking & Final Product Demos & Investor Lounge",
  },
];

const ScheduleCard = ({ item }) => {
  return (
    <div className="flex items-center mt-3">
      {/* left */}
      <div className="bg-[#2A2A2A] min-h-[170px] md:min-h-[200px] text-[#F8FAFC] rounded-2xl flex flex-col relative">
        <div className="flex items-center gap-3 p-3 ">
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-4xl font-bold">{item.start.split(" ")[0]}</p>
            <p className="text-sm md:text-xl">{item.start.split(" ")[1]}</p>
          </div>
          <p className="text-5xl">-</p>
          <div className="flex flex-col items-center">
            <p className="text-xl md:text-4xl font-bold">{item.end.split(" ")[0]}</p>
            <p className="text-sm md:text-xl">{item.end.split(" ")[1]}</p>
          </div>
        </div>

        {/* Clock icon */}
        <img
          src="/clock.svg"
          alt="clock image"
          className="h-14 md:h-22 absolute bottom-0 left-0"
        />

        {/* Title + Subtitle */}
        <div className="p-3 relative left-6 md:left-16 bottom-3 z-10">
          <p className="text-xl md:text-2xl">{item.title}</p>
          <p className="text-lg md:text-xl font-bold">{item.subtitle}</p>
        </div>
      </div>

      {/* right */}
      <div
        className="relative border-r-1 border-t-1 border-b-1 w-full  bg-cover bg-center max-h-[140px] md:min-h-[150px] md:max-w-[900px] flex md:h-20 text-white rounded-r-2xl overflow-hidden"
        style={{ backgroundImage: "url('/three.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative text-[#F8FAFC] font-bold text-3xl flex justify-center items-center p-5 ">
          <p className="text-lg md:text-3xl">{item.description}</p>
        </div>
      </div>
    </div>
  );
};


const Agenda = () => {
  return (
    <>
      <Nav />

      {/* one */}
      <section className="relative min-h-screen w-full bg-black text-white overflow-hidden pt-2">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>

        {/* Background Images */}
        <div className="absolute inset-0 flex gap-2 sm:gap-5">
          {/* Left Image (hidden on mobile) */}
          <div
            className=" md:block w-1/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/agendaleft.png')" }}
          ></div>

          {/* Center Image */}
          <div
            className="w-full md:w-4/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/agendacenter.png')" }}
          ></div>

          {/* Right Image (hidden on mobile) */}
          <div
            className=" md:block w-1/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/agnedaright.png')" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 md:py-20 lg:py-28">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-5xl text-gray-200 mb-8 text-xs sm:text-sm md:text-base font-semibold gap-3 md:gap-0">
            <div className="flex sm:flex-row gap-19 sm:gap-10 md:gap-130">
              <span className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl">
                August 24, 2025
              </span>
              <span className="font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl">
                9am - 6pm GMT
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] font-extrabold text-white/80 leading-tight tracking-tight">
            Agenda
          </h1>

          {/* Subtitle */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 max-w-2xl sm:max-w-3xl">
            Beyond Automation Intelligent AI Agents as Strategic Assets
          </h2>

          {/* Description */}
          <p className="mt-4 sm:mt-6 max-w-xl  text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium text-gray-200 md:min-w-[1200px]">
            Join global AI leaders, architects and innovators to explore how
            autonomous agents are reshaping enterprise decision-making. Go
            beyond scripted automation and into systems that learn, adapt and
            deliver lasting business value.
          </p>

          {/* CTA Button */}
          <button className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg shadow-lg shadow-blue-700/40 transition">
            Register now
          </button>
        </div>
      </section>

      {/* two */}
      <section
        className="relative w-full bg-cover bg-center  text-white"
        style={{ backgroundImage: "url('/stars.jpg')" }}
      >
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* whole content */}
        <div className="flex flex-col gap-6 md:gap-9 p-7 md:p-15 ">
          {/*  content top */}
          <div
            className="relative  bg-cover bg-center flex items-center justify-center text-center border border-white"
            style={{ backgroundImage: "url('/agenda.png')" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/80" />

            <img
              src="/design.svg"
              alt="logo"
              className=" top-0 md:top-20 md:h-50 absolute md:left-20 h-16 left-0 "
            />

            <div className="relative flex flex-col gap-3 my-8 mt-14  ">
              <h2 className="font-bold text-4xl md:text-6xl md:max-w-[800px]">
                Where Startagy Meets Intelligence-No Buzzwords Just
                Breakthroughs
              </h2>
              <p className="font-semibold text-2xl ">
                An exclusive in-person event by FlivoAI
              </p>
              <p className="text-md font-semibold">
                August 24, 2025 | Enercare Centre Convention Center, Toronto,
                Canada
              </p>
            </div>
          </div>

          {/* content bottom */}
          <div className="relative z-10 flex flex-col md:flex-row gap-8 ">
            {/* Main Content */}

            <div
              className="relative flex-1 bg-black/40 border border-gray-500 bg-cover bg-center p-8 md:p-12 backdrop-blur-sm"
              style={{ backgroundImage: "url('/agendaleft.png')" }}
            >
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* Top-left Logo / Chevron */}
              <div className="hidden md:block md:absolute md:top-30 md:left-0 md:z-10">
                <img
                  src="/design.svg"
                  alt="Chevron Logo"
                  className="h-20 md:h-40"
                />
              </div>

              {/* Content */}
              <div className="relative max-w-[600px] flex flex-col mx-auto md:text-[28px] text-center md:text-start text-white">
                <p className="mt-6 text-lg md:text-xl leading-relaxed">
                  Explore the full-day agenda for Beyond Automation, a live
                  gathering designed for AI leaders, digital transformation
                  executives and innovation architects. From game-changing
                  keynotes to deep-dive technical sessions, every moment focuses
                  on turning intelligent agents into real enterprise value.
                </p>

                <p className="mt-6 font-bold text-lg md:text-xl leading-relaxed">
                  Arrive curious. Leave with strategic clarity, peer insights
                  and practical frameworks.
                </p>
              </div>
            </div>

            {/* Right Side Image */}

            <div className="relative md:w-[240px] border border-gray-500 overflow-hidden">
              {/* Image */}
              <img
                src="/enercare.png"
                alt="Enercare Centre"
                className="w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Top-right Chevron Icon */}
              <div className="absolute top-0 right-0">
                <img
                  src="/design.svg"
                  alt="Decorative Chevron"
                  className="h-26"
                />
              </div>

              {/* Bottom Text */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-2xl text-white">
                  Enercare Centre
                </h3>
                <p className="text-sm font-medium text-[#F8FAFC]">
                  Convention center in Toronto, Canada
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* three */}
      <section
        className="relative p-4 w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/agendamid.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="flex flex-col gap-6 items-center">
          {/* Top */}
          <div className=" relative max-w-[398px] md:max-w-[1000px] flex flex-col items-center md:flex-row p-5 md:p-12 border-1 backdrop-blur-md gap-3 overflow-hidden rounded-xl border-white px-10">
            <p className="font-bold text-xl md:text-4xl">
              Beyond Automation Agenda
            </p>
            <p className="font-bold text-xl md:text-4xl">August 24, 2025</p>
            <img
              src="/design.svg"
              alt="logo"
              className="absolute h-12 md:h-16 right-0 top-0"
            />
          </div>

          {/* mid */}
          <div className="relative max-w-[460px] md:min-w-[1170px] ">
            {scheduleData.map((item, index) => (
              <ScheduleCard key={index} item={item} />
            ))}{" "}
          </div>

          {/* button */}
          <div className="relative flex gap-1 border-2 border-white rounded p-2 bg-gradient-to-r from-[#60A5FA] to-[#396294] mb-4">
            <p className="text-white font-semibold text-2xl px-4">
              Download Full Agenda
            </p>
            <img src="/download.svg" alt="download" className="h-7" />
          </div>
        </div>
      </section>

      {/* four */}
      <section
        className="relative w-full bg-cover bg-center text-white py-12 px-4 flex items-center justify-center"
        style={{ backgroundImage: "url('/torright.png')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content */}
        <div className="relative border border-white/30 backdrop-blur-md flex flex-col items-center text-center w-full max-w-5xl px-6 py-10 rounded-xl">
          {/* Logo */}
          <img
            src="/flivo.png"
            alt="flivo logo"
            className="h-12 md:h-16 lg:h-20 mb-6"
          />

          {/* Description */}
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6">
            Seats are limited. Don’t miss the event redefining how intelligent
            agents drive real enterprise outcomes.
          </p>

          {/* Button */}
          <button className="bg-gradient-to-r from-[#60A5FA] to-[#396294] text-white font-semibold text-base sm:text-lg md:text-xl px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:opacity-90 transition">
            Register now
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Agenda;
