import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import { useState } from "react";

export type Props = {
  bill: number;
  people: number;
  total: number;
};

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Tipper bill={bill} people={people} total={total} />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
