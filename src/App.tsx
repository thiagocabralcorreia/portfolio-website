import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";

import ProjectDetails from "./pages/ProjectDetails";

import Projects from "./pages/Projects";

const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="bg-white dark:bg-primaryDarkBackground">
      <Router>
        <ScrollToTop />
        <Suspense fallback={""}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
