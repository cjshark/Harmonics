import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-background">
        <section id="home">
          <Hero />
        </section>
        <section id="shop">
          <Shop />
        </section>
      </div>
    </>
  );
}

export default App;
