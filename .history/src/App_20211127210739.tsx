import Footer from "./components/Footer";
import logo from "./assets/logo.svg";
import Tipper from "./components/Tipper";
import React, { ChangeEventHandler, useEffect, useState } from "react";

export type Props = {
  bill: number;
  people: number;
  total: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function App() {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value);
    setBill(parsedValue);
  };

  const handlePeople = () => {
    
  }

  const calculate = () => {
    setTotal(bill);
  };


  useEffect(() => {
    calculate()
  })
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
