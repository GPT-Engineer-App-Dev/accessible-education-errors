import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AccessibilityError1 from "./pages/AccessibilityError1.jsx";
import AccessibilityError2 from "./pages/AccessibilityError2.jsx";
import AccessibilityError3 from "./pages/AccessibilityError3.jsx";
import AccessibilityError4 from "./pages/AccessibilityError4.jsx";
import AccessibilityError5 from "./pages/AccessibilityError5.jsx";
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
      </Routes>
    </Router>
  );
}

export default App;