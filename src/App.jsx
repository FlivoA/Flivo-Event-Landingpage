import  Home  from './components/Home';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Torronto from './components/Torronto';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import FAQ from './components/FAQ';
import ScrollToTop from "./components/utils/ScrollToTop.jsx";
function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beyond/event" element={<Torronto />} />
        <Route path="/beyond/speaker" element={<Speakers />} />
        <Route path="/beyond/agenda" element={<Agenda />} />
        <Route path="/beyond/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}

export default App
