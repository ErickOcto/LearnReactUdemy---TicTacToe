import Header from "./components/Header";
import imgHeader from "./assets/investment-calculator-logo.png";
import Input from "./components/Input";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [value, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue){
    setValue((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      }
    })
  }

  return (
    <>
      <Header img={imgHeader} title="Investment Calculator" />
      <Input onEdit={handleChange} userInput={value} />
      {value.duration ? (<Results input={value} />) : (<div className="center">Please enter a duration greater than zero</div>)}
    </>
  );
}

export default App