import { useMemo, useState } from "react";
import { useCounter } from "../Hooks";

const heaveyStuff = ( iterationNumber = 100) => {
  for(let i = 0; i < iterationNumber; i++){
    console.log('aji vamos...')
  }
  return `iteration number ${iterationNumber} realizadas`
}

export const MemoHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(4000);
  const memoize  = useMemo(()=> heaveyStuff(counter),[counter])

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memoize}</h4>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  );
};
