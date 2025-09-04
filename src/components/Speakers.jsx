import Footer from "./layout/Footer";
import Nav from "./layout/Nav";

const sessions = [
  {
    id: 1,
    sessionTitle: "Beyond Automation: Intelligent Agents in Action",
    name: "Pascal Bornet",
    role: "Board Advisor | Author",
    council: "Forbes Tech Council",
    headline: "AI & Automation Pioneer & Global Keynote Speaker",
    description:
      "Pascal Bornet is a globally recognized authority on intelligent automation and human-centric AI. With 20+ years of leadership at McKinsey and EY, he helped shape global automation practices and led hundreds of enterprise transformations worldwide. As the bestselling author of Intelligent Automation and Agentic Artificial Intelligence, Pascal’s work explores how AI can elevate, not replace human potential. A frequent keynote speaker and lecturer, his insights appear in Forbes, Bloomberg and the Financial Times.",
    image: "/pascal.png",
  },
  {
    id: 2,
    sessionTitle: "Trust, Bias & the Human Touch in AI Agents ",
    name: "Pascal Bornet",
    role: "Angel Advisor | Author",
    council: "MasterClass Instructor ",
    headline: "Global AI Advisor & Former AWS AI/ML Leader ",
    description:
      "Allie K. Miller is one of the most influential voices in the AI business, advising organizations like OpenAI, Salesforce, Google and Samsung on enterprise AI transformation. A former AI leader at Amazon and IBM, she’s known for launching pioneering programs, including AWS's global ML startup business and IBM’s first multimodal AI team. With deep expertise across ML, product strategy and venture ecosystems, Allie also teaches AI on MasterClass and has been featured in Forbes, WSJ and Fortune.",
    image: "/allie.png",
  },
  {
    id: 3,
    sessionTitle: "Strategic Decisioning with Intelligent Agents & Designing Intelligent Agents for Human-Centered Impact",
    name: "Cassie Kozyrkov ",
    role: "CEO-Data Scientific",
    council: "Founder-Decision Intelligence",
    headline: "Former Chief Decision Scientist-Google ",
    description:
      "Cassie Kozyrkov is the founder of Decision Intelligence and one of the most trusted voices in AI strategy. As Google’s former Chief Decision Scientist, she helped over 500 teams implement data-driven practices and personally trained 20,000 Googlers in AI, analytics and high-stakes decision-making. Now CEO of Data Scientific, Cassie advises global organizations like NASA, Gucci and Lenovo on building AI systems that empower human judgment. With a half-million followers and millions of readers worldwide, she blends technical depth with humor and clarity.",
    image: "/elipse.png",
  },
  {
    id: 4,
    sessionTitle: "Strategic Decisioning with Intelligent Agents & Emotion AI & the Rise of Empathetic Agents",
    name: "Rama Akkiraju ",
    role: "Former IBM Fellow",
    council: " AI Executive",
    headline: "Award-Winning Product & Engineering Leader",
    description:
      "Rama Akkiraju is one of the world’s most accomplished AI innovators, known for delivering enterprise-grade AI solutions at scale. A former IBM Fellow and CTO of Watson AI Ops, she led teams of 600+ engineers to build self-healing IT systems, advanced NLU platforms, and emotion-aware AI services that have served billions of API calls globally. With over 75 patents, 100+ publications and multiple global awards, Rama’s work spans natural language processing, enterprise AI architecture and human-machine collaboration",
    image: "/rama.png",
  },
  {
    id: 5,
    sessionTitle: "Strategic Decisioning with Intelligent Agents ",
    name: "Sinead Bovell ",
    role: "Global Tech Educator ",
    council: "UN AI Advisor",
    headline: "Futurist & Founder-WAYE",
    description:
      "Sinead Bovell is a futurist and leading voice on the societal impact of artificial intelligence. As the founder of WAYE, she prepares leaders and organizations for a future shaped by emerging technologies. She advises Fortune 500 executives, governments and UN bodies on AI policy, national security, and education reform. An 11-time United Nations speaker and SXSW headliner, Sinead is known for making complex tech accessible to global audiences. Her insights on AI and the future of work have reached 17,000+ policymakers and educators worldwide. ",
    image: "/shine.png",
  },
  {
    id: 6,
    sessionTitle: "AI Agents for Resilience & Strategic Foresight ",
    name: "Jonathan Brill  ",
    role: "Former Global Futurist-HP | Author-Rogue Waves ",
    council: "Transformation Architect ",
    headline: "#1 Futurist, Forbes ",
    description:
      "Jonathan Brill is ranked the world’s #1 futurist by Forbes and is widely regarded as a leading voice on innovation strategy and transformation. Formerly Global Futurist at HP and a trusted advisor to Fortune 50 giants, Jonathan helps executives and governments anticipate disruption, leverage AI and build future-ready organizations. His bestselling book Rogue Waves is considered essential reading for navigating complex change. ",
    image: "/jon.png",
  },
  {
    id: 7,
    sessionTitle: "Trust, Bias & the Human Touch in AI Agents",
    name: "Dr. Rumman Chowdhury",
    role: "AI Ethics Leader | Former Director-Twitter,META ",
    council: "Responsible AI Fellow-Harvard ",
    headline: "CEO-Humane Intelligence",
    description:
      "Dr. Rumman Chowdhury is a leading voice in responsible AI, with deep expertise in algorithmic fairness, governance and transparency. As CEO of Humane Intelligence and a Responsible AI Fellow at Harvard’s Berkman Klein Center, she develops open, socio-technical solutions to mitigate harms from automated systems. Previously, she led Twitter’s META team and pioneered algorithmic audit tools as founder of Parity and Global Lead for Responsible AI at Accenture.",
    image: "/rum.png",
  },
];

const SessionCards = () => {
  return (
    <div className="overflow-y-auto px-4 space-y-8">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="flex flex-col md:flex-row bg-transparent text-white gap-4"
        >
          {/* Left Section - Session Info */}
          <div className="bg-[#2a2a2a] md:bg-transparent border border-white md:border-none rounded-md p-4 md:w-1/4 flex flex-col items-center md:justify-start md:gap-10 justify-center md:min-w-[250px]">
            <h3 className="text-xl md:text-4xl md:bg-[#313131] md:px-6 md:py-3 font-bold md:border md:border-white md:w-full">
              Session
            </h3>
            <p className="mt-3 md:text-3xl p-3 md:bg-[#313131] md:px-6 md:py-3 md:border md:border-white text-base font-semibold leading-snug">
              {session.sessionTitle}
            </p>
          </div>

          {/* Right Section - Speaker Info */}
          <div className="flex-1 relative bg-gradient-to-br backdrop-blur-md rounded-xl shadow-lg border border-white p-6 flex flex-col gap-6 overflow-hidden">
            <div className="flex gap-4 md:gap-13">
              {/* Speaker Image */}
              <img
                src={session.image}
                alt={session.name}
                className="w-32 h-32 md:h-44 md:w-44 rounded-full border-2 md:border-4 border-white object-cover z-10"
              />
              {/* Speaker Details */}
              <div className="flex-1 z-10 md:text-2xl text-[#F8FAFC]">
                <h2 className="text-2xl md:text-4xl font-bold">
                  {session.name}
                </h2>
                {session.role && (
                  <p className="text-sm md:text-2xl  mt-1">{session.role}</p>
                )}
                {session.council && (
                  <p className="text-sm md:text-2xl">{session.council}</p>
                )}
                <p className="text-base font-bold md:text-2xl mt-3 md:max-w-[480px]">
                  {session.headline}
                </p>

                {/* Right Design SVG (absolute) */}
                <div className="absolute top-0 right-0  flex items-start justify-end">
                  <img
                    src="/design.svg"
                    alt="design"
                    className="h-full object-contain"
                  />
                </div>
              </div>
            </div>

            <p className="mt-3 text-sm md:text-2xl text-[#F8FAFC] text-center md:text-start ">
              {session.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Speakers = () => {
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
            style={{ backgroundImage: "url('/speakleft.png')" }}
          ></div>

          {/* Center Image */}
          <div
            className="w-full md:w-4/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/speakcenter.png')" }}
          ></div>

          {/* Right Image (hidden on mobile) */}
          <div
            className=" md:block w-1/6 bg-cover bg-center"
            style={{ backgroundImage: "url('/speakright.png')" }}
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
            Speakers
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
        className="relative w-full rounded-lg overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/speakcenter.png')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[#131313a3]" />

        <div className="relative my-3">
          <h1 className=" text-4xl md:text-6xl mb-3 md:mb-6 text-center text-white font-bold">
            Speakers
          </h1>

          <div>
            <SessionCards />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Speakers;
