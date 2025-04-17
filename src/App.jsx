import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import ShopPage from "./components/ShopPage"; // make sure path is correct

const BlogPage = lazy(() => import("./components/BlogPage")); // dynamically imported

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black overflow-x-hidden scrollbar-hide">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" className="overflow-x-hidden">
                  <Hero />
                </section>
                <section id="shop" className="overflow-x-hidden">
                  <Shop />
                </section>
                <section id="about" className="overflow-x-hidden">
                  <About />
                </section>
                <section id="blog" className="overflow-x-hidden">
                  <Blog />
                </section>
                <Footer />
              </>
            }
          />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense
                fallback={
                  <div className="text-white p-10">Loading blog...</div>
                }
              >
                <BlogPage />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
