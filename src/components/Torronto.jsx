import Footer from "./Footer";
import Nav from "./Nav";

const Torronto = () => {
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
            style={{ backgroundImage: "url('/torleft.png')" }}
          ></div>

          {/* Center Image */}
          <div
            className="w-full md:w-4/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/tormid.png')" }}
          ></div>

          {/* Right Image (hidden on mobile) */}
          <div
            className=" md:block w-1/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/torright.png')" }}
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
            Torronto
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
        className="relative min-h-screen w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/stars.jpg')" }}
      >
        {/* Overlay (optional for readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-6 py-16">
          {/* Main Content */}

          <div
            className="relative flex-1 bg-black/40 border border-gray-500 p-8 md:p-12 backdrop-blur-sm"
            style={{ backgroundImage: "url('/middle.png')" }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Top-left Logo / Chevron */}
            <div className="absolute top-0 left-0 z-10">
              <img src="/design.svg" alt="Chevron Logo" height={54} />
            </div>

            {/* Content */}
            <div className="relative max-w-[600px] flex flex-col mx-auto md:text-[28px] text-white">
              <p className="md:text-xl">
                <span className="font-bold">
                  “Beyond Automation: Intelligent AI Agents as Strategic Assets”
                </span>
                is not just another AI event, it’s a strategic briefing for
                enterprise leaders shaping the future of intelligent systems.
              </p>

              <p className="mt-6 text-lg md:text-xl leading-relaxed">
                Hosted at Toronto’s Enercare Centre Convention Center on August
                24th, 2025, this one-day summit explores how intelligent AI
                agents are redefining decision-making, automation and enterprise
                value.
              </p>

              <p className="mt-6 text-lg md:text-xl leading-relaxed">
                From agent-based architectures and enterprise AI strategy to
                real-world GenAI applications, the event brings together AI
                architects, innovation leads and product teams to unlock
                scalable, secure AI adoption.
              </p>

              <p className="mt-6 text-lg md:text-xl leading-relaxed">
                Whether you’re building internal agent ecosystems or evaluating
                long-term automation investments, this summit delivers
                actionable insights for designing intelligent, adaptable systems
                at scale.
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
              <h3 className="font-bold text-2xl text-white">Enercare Centre</h3>
              <p className="text-sm font-medium text-[#F8FAFC]">
                Convention center in Toronto, Canada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* three */}
      <section className="relative w-full flex items-center flex-col bg-gradient-to-b from-[#000000] to-[#4b4b4b] text-white px-6 md:px-12 py-16 gap-10">
        {/* Content */}
        <div className="relative mx-auto flex flex-col items-center gap-8 border-2 p-6 w-full max-w-[1200px] rounded-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 rounded-xl"
            style={{ backgroundImage: "url('/gain.png')" }}
          />
          {/* Header */}
          <div className="text-center relative my-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 max-w-3xl">
            <img src="/design.svg" alt="logo" className="w-20 md:w-[130px]" />
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold leading-snug">
              What You’ll Gain <br /> at Enterprise AI Summit 2025
            </h2>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="grid relative grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1200px] gap-6 w-full">
          <div className="bg-[#11111138] rounded-xl p-5 md:p-6 shadow-md border-2  shadow-white border-white font-semibold">
            <p className="text-sm md:text-base lg:text-xl">
              Understand the real-world capabilities of intelligent AI agents
              and how they’re transforming enterprise workflows, not just
              automating tasks.
            </p>
          </div>
          <div className="bg-[#11111138] rounded-xl p-5 md:p-6 shadow-md border-2 shadow-white border-white font-semibold">
            <p className="text-sm md:text-base lg:text-xl">
              Learn how AI leaders are designing agent-based systems that drive
              decision-making, performance and long-term value.
            </p>
          </div>
          <div className="bg-[#11111138] rounded-xl p-5 md:p-6 shadow-md border-2  shadow-white border-white font-semibold">
            <p className="text-sm md:text-base lg:text-xl">
              Walk away with architectures, integration models and governance
              patterns tailored for scalable, secure deployment.
            </p>
          </div>
          <div className="bg-[#11111138] rounded-xl p-5 md:p-6 shadow-md border-2  shadow-white border-white font-semibold">
            <p className="text-sm md:text-base lg:text-xl">
              Connect with enterprise architects, GenAI experts and innovation
              teams building agent ecosystems inside real organizations.
            </p>
          </div>
        </div>
      </section>

      {/* four */}
      <section className="relative w-full bg-gradient-to-b from-[#000000] to-[#0F0F0F] text-white px-4 sm:px-6 md:px-12 py-16 md:py-20 flex flex-col items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/venubg.jpg')" }}
        />

        {/* Content wrapper */}
        <div className="relative z-10 w-full max-w-6xl flex flex-col items-center gap-8 md:gap-10">
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
            Venue
          </h2>

          {/* ========== MOBILE VIEW (stacked) ========== */}
          <div className="flex flex-col gap-6 w-full md:hidden">
            {/* Thumbnail card */}
            <div className="bg-white rounded-lg shadow-md shadow-black overflow-hidden border-2 border-white w-full max-w-sm mx-auto">
              <img
                src="/enercare.png"
                alt="Venue preview"
                className="w-full h-40 object-cover"
              />
              <div className="flex justify-between items-center px-4 py-3 bg-white">
                <img
                  src="/chair.svg"
                  alt="Accessible"
                  className="h-6 w-6 opacity-80"
                />
                <img
                  src="/car.svg"
                  alt="Parking"
                  className="h-6 w-6 opacity-80"
                />
                <img
                  src="/wifi.svg"
                  alt="Wi-Fi"
                  className="h-6 w-6 opacity-80"
                />
                <img
                  src="/train.svg"
                  alt="Transit"
                  className="h-6 w-6 opacity-80"
                />
              </div>
            </div>

            {/* Map */}
            <div className="relative w-full h-[280px] sm:h-[350px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="Enercare Centre Map"
                src={
                  "https://www.google.com/maps?q=" +
                  encodeURIComponent(
                    "Enercare Centre 100 Princes' Blvd, Toronto, ON M6K 3C3, Canada"
                  ) +
                  "&output=embed"
                }
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Venue info + Button */}
            <div className="bg-black/80 rounded-lg px-5 py-4 flex flex-col gap-3 text-center">
              <h3 className="text-lg font-semibold">Enercare Centre</h3>
              <p className="text-sm flex items-center justify-center gap-2 text-gray-300">
                <img
                  src="/locationw.svg"
                  alt="location"
                  className="h-4 w-4 opacity-80"
                />
                #1, 100 Princes' Blvd, Toronto, ON M6K 3C3, Canada
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Enercare+Centre,+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#373737] px-5 py-2 rounded-lg font-bold hover:bg-gray-200 transition flex items-center justify-center gap-2 shadow"
              >
                <img
                  src="/locationb.svg"
                  alt="directions"
                  className="h-5 w-5"
                />
                Get directions
              </a>
            </div>
          </div>

          {/* ========== DESKTOP VIEW (overlay style) ========== */}
          <div className="hidden md:block relative h-[500px] w-full overflow-hidden shadow-2xl rounded-lg">
            {/* Map iframe */}
            <iframe
              title="Enercare Centre Map"
              src={
                "https://www.google.com/maps?q=" +
                encodeURIComponent(
                  "Enercare Centre 100 Princes' Blvd, Toronto, ON M6K 3C3, Canada"
                ) +
                "&output=embed"
              }
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm flex flex-col md:flex-row items-start md:items-center justify-between px-6 py-4 gap-4">
              {/* Venue details */}
              <div className="flex flex-col gap-1 md:relative md:left-70 text-white">
                <h3 className="text-lg md:text-xl font-semibold">
                  Enercare Centre
                </h3>
                <p className="text-sm md:text-base flex items-center gap-2 text-gray-300">
                  <img
                    src="/locationw.svg"
                    alt="location"
                    className="h-4 w-4 opacity-80"
                  />
                  #1, 100 Princes' Blvd, Toronto, ON M6K 3C3, Canada
                </p>
              </div>

              {/* Get directions button */}
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Enercare+Centre,+Toronto"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#373737] px-5 py-2 rounded-lg font-bold hover:bg-gray-200 transition flex items-center gap-2 shadow"
              >
                <img
                  src="/locationb.svg"
                  alt="directions"
                  className="h-5 w-5"
                />
                Get directions
              </a>
            </div>

            {/* Thumbnail card (floating bottom-left) */}
            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-md shadow-black overflow-hidden border-2 border-white w-56">
              <img
                src="/enercare.png"
                alt="Venue preview"
                className="w-full h-32 object-cover"
              />
              <div className="flex justify-between items-center px-4 py-3 bg-white">
                <img
                  src="/chair.svg"
                  alt="Accessible"
                  className="h-6 w-6 opacity-80"
                />
                <img
                  src="/car.svg"
                  alt="Parking"
                  className="h-6 w-6 opacity-80"
                />
                <img
                  src="/wifi.svg"
                  alt="Wi-Fi"
                  className="h-6 w-6 opacity-80"
                />
                <img
                  src="/train.svg"
                  alt="Transit"
                  className="h-6 w-6 opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Torronto;
