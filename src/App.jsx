import Hedr from "./co/Header";
import UsIn from "./co/UsIn";
import { useState } from "react";
import Resu from "./co/Resu";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Hedr />;
      <UsIn userInput={userInput} onChange={handleChange} />
      <Resu input={userInput} />
    </>
  );
}

export default App;
