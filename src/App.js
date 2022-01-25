import Header from "./components/layout/Header";
import WeatherApp from "./pages/WeatherApp";
import About from "./pages/About";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WeatherProvider } from "./context/WeatherCotext";

const App = () => {
  return (
    <WeatherProvider>
      <Router>
        <div className="flex flex-col justify-between min-h-screen">
          <Header />
          <main className="container mx-auto max-w-md flex-1 mt-10">
            <Routes>
              <Route path="/" element={<WeatherApp />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/*"
                element={<h1 className="">Error 404 Nothing Found</h1>}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </WeatherProvider>
  );
};

export default App;
