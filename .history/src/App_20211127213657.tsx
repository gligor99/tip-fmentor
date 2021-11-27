import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import React, { useEffect, useState } from "react";

export type Props = {
  bill: number;
  people: number;
  total: number;
  amount: number;
  tip: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePeople: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(1);
  const [amount, setAmount] = useState(0)
  const [total, setTotal] = useState<number>(0);
  const [tip, setTip] = useState(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value);
    setBill(parsedValue);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const parsed = parseInt(value);
    setTip(parsed);
  };
  
  const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value);
    setPeople(parsedValue);
  };

  const calculate = () => {
    if (people === 0) {
      window.alert("People property cannot be 0");
      setPeople(1);
    } else {
      setTotal(bill * people);
    }
  };

  useEffect(() => {
    calculate();
  });
  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <Tipper
        bill={bill}
        people={people}
        total={total}
        tip={tip}
        handleChange={handleChange}
        handlePeople={handlePeople}
        handleButton={handleButton}
      />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
