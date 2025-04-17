import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-background overflow-x-hidden">
        <section id="home" className="overflow-x-hidden">
          <Hero />
        </section>
        <section id="shop" className="overflow-x-hidden">
          <Shop />
        </section>
      </div>
    </>
  );
}

export default App;
