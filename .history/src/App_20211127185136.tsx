import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0)
  const [people, setPeople] = useState(0)
  const [total, setTotal] = useState(0)
  
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Tipper />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
