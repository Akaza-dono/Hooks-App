import { useState } from "react";
import { useCounter } from "../Hooks";
import { Small } from "./Small";

export const Memorize = () => {
    const [show, setShow] = useState(true)
  const { counter, increment } = useCounter(10);

  return (
    <>
      <h1>
        Counter <Small counter={counter}/>
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-outline-primary" onClick={()=> setShow(!show)}>
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
