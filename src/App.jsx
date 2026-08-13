import { Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectsPage from "./pages/ProjectsPage";
import { ReactLenis, useLenis } from "/utils/lenis";

function App() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    lenis?.scrollTo(0, { immediate: true });
  }, [location.pathname, lenis]);

  return (
    <>
      <Navbar />
      <ReactLenis root>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
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
