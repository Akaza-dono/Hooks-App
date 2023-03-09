import { useCallback, useState } from "react"
import { ShowInbcrement } from "./ShowInbcrement"

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)
    const increment = useCallback(
      (value) => {
        setCounter(e => e + value)
      },
      [],
    )
    

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

  return (
    <>
        <h1>use CallBack Hook: {counter}</h1>
        <hr />
        <ShowInbcrement increment={increment}/>
    </>
  )
}
