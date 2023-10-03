import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
import Navbar from "./components/navbar/navbar";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
