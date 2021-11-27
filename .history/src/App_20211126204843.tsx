import Footer from "./components/Footer";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
