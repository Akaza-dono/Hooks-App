import { memo } from "react"


export const Small = memo(({counter}) => {
    console.log('Redibujado')
    
  return (
    <small>{counter}</small>
  )
})
