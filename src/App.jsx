import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AccessibilityError1 from "./pages/AccessibilityError1.jsx";
import AccessibilityError2 from "./pages/AccessibilityError2.jsx";
import AccessibilityError3 from "./pages/AccessibilityError3.jsx";
import AccessibilityError4 from "./pages/AccessibilityError4.jsx";
import AccessibilityError5 from "./pages/AccessibilityError5.jsx";
import AccessibilityError6 from "./pages/AccessibilityError6.jsx";
import AccessibilityError7 from "./pages/AccessibilityError7.jsx";
import AccessibilityError8 from "./pages/AccessibilityError8.jsx";
import AccessibilityError9 from "./pages/AccessibilityError9.jsx";
import AccessibilityError10 from "./pages/AccessibilityError10.jsx";
import Credits from "./pages/Credits.jsx";
import About from "./pages/About.jsx";
import CoolAnimations from "./pages/CoolAnimations.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/accessibility-error-1" element={<AccessibilityError1 />} />
        <Route exact path="/accessibility-error-2" element={<AccessibilityError2 />} />
        <Route exact path="/accessibility-error-3" element={<AccessibilityError3 />} />
        <Route exact path="/accessibility-error-4" element={<AccessibilityError4 />} />
        <Route exact path="/accessibility-error-5" element={<AccessibilityError5 />} />
        <Route exact path="/accessibility-error-6" element={<AccessibilityError6 />} />
        <Route exact path="/accessibility-error-7" element={<AccessibilityError7 />} />
        <Route exact path="/accessibility-error-8" element={<AccessibilityError8 />} />
        <Route exact path="/accessibility-error-9" element={<AccessibilityError9 />} />
        <Route exact path="/accessibility-error-10" element={<AccessibilityError10 />} />
        <Route exact path="/credits" element={<Credits />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/cool-animations" element={<CoolAnimations />} />
      </Routes>
    </Router>
  );
}

export default App;