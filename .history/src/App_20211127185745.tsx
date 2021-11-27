import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import { useState } from "react";

export type Props = {
  bill: number;
  people: number;
  total: number;
  handleChange: () => void;
};

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleChange = () => {

  }

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Tipper bill={bill} people={people} total={total} handleChange={handleChange} />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
