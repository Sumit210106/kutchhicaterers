import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

/* ========================= */
/* ✅ LAZY IMPORTS */
/* ========================= */
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

/* ========================= */
/* ✅ INLINE LAYOUT */
/* ========================= */
function Layout() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <Outlet />
        </Suspense>

        <MobileNav />
      </div>

      <Footer />
    </>
  );
}

/* ========================= */
/* ✅ APP */
/* ========================= */
function App() {
  return (
    <Router>
      <Routes>

        {/* WITH NAVBAR + FOOTER */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>

        {/* WITHOUT NAVBAR + FOOTER */}
        <Route
          path="*"
          element={
            <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
              <NotFound />
            </Suspense>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;