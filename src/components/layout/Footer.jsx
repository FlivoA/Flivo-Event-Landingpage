import {useState} from "react";

export const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('http://192.168.0.109:5000/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Thank you for subscribing! Check your inbox for confirmation.');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.message || 'Subscription failed. Please try again.');
            }
        } catch (error) {
            console.log(error);
            setStatus('error');
            setMessage('Network error. Please try again.');
        }
    };


    return (
    <footer className="bg-black text-gray-300 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + About */}
        <div>
          <img src="/pngs/flivo.png" alt="Flivo.ai Logo" className="h-10 mb-4" />
          <h2 className="text-xl font-bold text-white">
            Enterprise AI Summit 2025
          </h2>
          <p className="mt-2 text-sm leading-relaxed ">
            Enabling C-level leaders, technology pioneers, and AI visionaries
            with insights on how to drive business success using artificial
            intelligence.
          </p>
          <div className="mt-4">
            <a href="https://www.linkedin.com/company/flivo-ai" className="">
              <img src="/svgs/linkedin1.svg" alt="LinkedIn" className="h-10 w-10" />
            </a>
          </div>
        </div>

        {/* Newsletter */}
          <div>
              <h3 className="text-white font-bold mb-3">NEWSLETTER SIGNUP</h3>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3 py-2 rounded-md bg-transparent border border-gray-500 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-1/2 text-white px-4 py-2 rounded-md transition ${
                          status === 'loading'
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-blue-500 hover:bg-blue-600'
                      }`}
                  >
                      {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </button>
              </form>

              {/* Status message */}
              {message && (
                  <div className={`mt-2 text-sm ${
                      status === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}>
                      {message}
                  </div>
              )}
          </div>

        {/* Event Links */}
        <div>
          <h3 className="text-white font-bold text-xl mb-3">Event</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Agenda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h3 className="text-white font-bold text-xl mb-3">Locations</h3>
          <ul className="space-y-2 mb-4">
            <li>Dubai</li>
            <li>New York</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-xl mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2 text-base">
              <img src="/svgs/mail.svg" alt="email" className="h-6 w-6" />
              connect@flivo.us
            </li>
            <li className="flex items-center gap-2 text-base">
              <img src="/svgs/phone.svg" alt="phone" className="h-6 w-6" />
              +1 (703) 543-995
            </li>
            <li className="flex items-center gap-2 text-base">
              <img src="/svgs/location.svg" alt="location" className="h-6 w-6" />
              Location
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 flex gap-4 flex-col border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        <p>© 2025 FlivoAI Enterprise AI Summit. All rights reserved.</p>
        <p>
          Explore more:{" "}
          <span className="text-[#60A5FA]">
            AI webinars,data analytics events,cloud innovation,tech
            summits,Microsoft AI events
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
