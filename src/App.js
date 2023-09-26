import About from "./components/NavBar/about/about";
import Main from "./components/NavBar/main/main";
import Navbar from "./components/NavBar/navbar";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
