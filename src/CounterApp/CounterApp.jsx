import { useState } from "react";

const CounterApp = ({ num }) => {
  const [number, setNumber] = useState(num);
  
  return (
    <>
      <h1>
        Contador <span>{number}</span>
      </h1>
      <button onClick={()=> setNumber(e => e + 1)}>sumar</button>
      <button onClick={()=> setNumber(e => e - 1)}>restar</button>
    </>
  );
};

export default CounterApp;