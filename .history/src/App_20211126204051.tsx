import Footer from "./components/Footer";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
