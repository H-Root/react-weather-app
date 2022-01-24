import Header from "./components/layout/Header";
import WeatherApp from "./pages/WeatherApp";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const axios = require("axios");

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className="container mx-auto max-w-md flex-1 mt-10">
          <Routes>
            <Route path="/" element={<WeatherApp />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
