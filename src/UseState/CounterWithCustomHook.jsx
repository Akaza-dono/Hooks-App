import { useCounter } from "../Hooks/useCounter";

export const CounterWithCustomHook = () => {

    const {counter, increment, decrement, resetVal} = useCounter();

  return (
    <>
      <h1>Counter Con Hook: {counter}</h1>;
      <hr />
      <button className="btn btn-success" onClick={()=> increment(2)}>+1</button>
      <button className="btn btn-success" onClick={resetVal}>reset</button>
      <button className="btn btn-success" onClick={()=>decrement(2)}>-1</button>

    </>
  );
};
