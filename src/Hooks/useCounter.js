import { useState } from "react"

export const useCounter = (initialValue = 10) => {
  
  
  const [counter, setcounter] = useState(initialValue)
  const increment = (value = 1) => {
    setcounter(counter + value);
  }
  const decrement = (value = 1) => {
    setcounter(counter - value);
  }
  const resetVal = () => {
    setcounter(initialValue);
  }
    return {
        counter,
        increment, 
        decrement,
        resetVal
    }
}
