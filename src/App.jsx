import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Gallery from "./pages/Gallery.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";

export default function App() {
  const [welcomeVisible, setWelcomeVisible] = useState(false);

  useEffect(() => {
    setWelcomeVisible(true);
    const timer = window.setTimeout(() => setWelcomeVisible(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      {welcomeVisible && (
        <div
          className="fixed right-4 top-20 z-50 flex max-w-sm items-center gap-3 rounded-xl bg-ink px-5 py-4 text-sm text-white shadow-card sm:right-8"
          role="status"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lime text-ink">
            ✦
          </span>
          Welcome to Nexa Studio. Let&apos;s make something meaningful.
          <button
            type="button"
            className="ml-1 text-white/70 transition hover:text-white"
            aria-label="Dismiss welcome message"
            onClick={() => setWelcomeVisible(false)}
          >
            ×
          </button>
        </div>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
