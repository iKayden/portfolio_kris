import About from "./components/NavBar/about/about";
import Main from "./components/NavBar/main/main";
import Navbar from "./components/NavBar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
    </div>
  );
}

export default App;
