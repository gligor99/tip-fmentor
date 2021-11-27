import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import { ChangeEventHandler, useState } from "react";

export type Props = {
  bill: number;
  people: number;
  total: number;
  handleChange: (e: ChangeEventHandler<HTMLInputElement>) => void;
};

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleChange = (e: ChangeEventHandler<HTMLInputElement>) => {
    setBill(e.target.value);
  };

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Tipper
        bill={bill}
        people={people}
        total={total}
        handleChange={handleChange}
      />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
