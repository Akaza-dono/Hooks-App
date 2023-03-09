import { useLayoutEffect, useRef, useState } from "react";

export const Quotes = ({ name, url }) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({width:0, height:0})

  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientRect();
    setBoxSize({height,width})
  }, [url])



  return (
    <>

<blockquote className="blockquote text-end mx-4"
      style={{ display: 'flex' }}>
      <p ref={pRef} className="mb-2">{name}</p>
      <footer className="blockquote-footer mt-2">{url}</footer>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    
    </>
  );
};
