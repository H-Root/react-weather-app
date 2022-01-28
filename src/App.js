import Header from "./components/layout/Header";
import WeatherApp from "./pages/WeatherApp";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { WeatherProvider } from "./context/WeatherCotext";
import Error404 from "./pages/Error404";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <WeatherProvider>
      <div className="flex flex-col justify-between min-h-screen overflow-x-hidden">
        <Header />
        <main className="container mx-auto max-w-md flex-1 mt-6">
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<WeatherApp />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </WeatherProvider>
  );
};

export default App;
