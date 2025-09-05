import  Home  from './components/Home';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Torronto from './components/Torronto';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import FAQ from './components/FAQ';
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
import Chicago from './components/Chicago.jsx';
import AgendaAi from './components/AgendaAi.jsx';
import FAQAi from './components/FAQAi.jsx';
import SpeakersAI from './components/SpeakersAi.jsx';
function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* routes for beyond title events */}
        <Route path="/beyond/event" element={<Torronto />} />
        <Route path="/beyond/speaker" element={<Speakers />} />
        <Route path="/beyond/agenda" element={<Agenda />} />
        <Route path="/beyond/faq" element={<FAQ />} />

        {/* routes for AI events */}
        <Route path="/ai/event" element={<Chicago />} />
        <Route path="/ai/speaker" element={ <SpeakersAI /> } />
        <Route path="/ai/agenda" element={<AgendaAi />} />
        <Route path="/ai/faq" element={<FAQAi />} />
      </Routes>
    </>
  )
}

export default App
