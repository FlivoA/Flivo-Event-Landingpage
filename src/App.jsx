import  Home  from './components/Home';
import './App.css'
import { Routes, Route } from "react-router-dom";
import Torronto from './components/Torronto';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import FAQ from './components/FAQ';
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Torronto />} />
        <Route path="/speaker" element={<Speakers />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  )
}

export default App
