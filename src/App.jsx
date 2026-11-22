import { Navigate, Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import { ReactLenis, useLenis } from "/utils/lenis";

function App() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#projekter") {
      const gallery = document.getElementById("projekter");
      if (gallery) {
        if (lenis) lenis.scrollTo(gallery, { immediate: true });
        else gallery.scrollIntoView({ behavior: "instant" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    lenis?.scrollTo(0, { immediate: true });
  }, [location.pathname, location.hash, lenis]);

  return (
    <>
      <Navbar />
      <ReactLenis root>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Navigate to="/#projekter" replace />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </ReactLenis>
    </>
  );
}

export default App;
