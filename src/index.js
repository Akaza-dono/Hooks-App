import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './UseState/CounterApp';
import { CounterWithCustomHook } from './UseState/CounterWithCustomHook';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HooksApp/>
    <CounterApp/> */}
    <CounterWithCustomHook/>
  </React.StrictMode>
);