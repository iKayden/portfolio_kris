import About from "./components/about/about";
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
    </div>
  );
}

export default App;
