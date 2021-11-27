import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import React, { useEffect, useState } from "react";

export type Props = {
  bill: string;
  people: number;
  total: number;
  amount: number;
  tip: number;
  customTip: string;
  handleBill: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePeople: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleButton: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCustomTip: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleReset: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function App() {
  const [bill, setBill] = useState<string>(0);
  const [people, setPeople] = useState<number>(1);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState<number>(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("Custom");

  const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = +value;
    setBill(parsedValue);
  };

  const handleButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    const parsed = +value;
    setTip(parsed);
  };

  const handlePeople = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseFloat(value);
    setPeople(parsedValue);
  };

  const handleCustomTip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomTip("");
    const value = e.target.value;
    const parsedValue = +value;
    setCustomTip(value);
    setTip(parsedValue);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setBill(0);
    setTip(0);
    setPeople(1);
  };

  const calculate = () => {
    if (people === 0) {
      window.alert("People property cannot be 0");
      setPeople(1);
    } else {
      setAmount((bill * tip) / 100 / people);
      setTotal((bill + tip) / people);
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
        customTip={customTip}
        amount={amount}
        handleBill={handleBill}
        handlePeople={handlePeople}
        handleButton={handleButton}
        handleCustomTip={handleCustomTip}
        handleReset={handleReset}
      />
      <Footer name="Luka Gligorevic" />
    </div>
  );
}

export default App;
