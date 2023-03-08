import { useLayoutEffect, useRef } from "react";

export const Quotes = ({ name, url }) => {

  const pRef = useRef();
  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect());
  }, [url])


  return (
    <blockquote className="blockquote text-end mx-4"
      style={{ display: 'flex' }}>
      <p ref={pRef} className="mb-2">{name}</p>
      <footer className="blockquote-footer mt-2">{url}</footer>
    </blockquote>
  );
};
