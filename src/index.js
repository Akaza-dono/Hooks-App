// import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Padre } from './07-tarea-memo/Padre';
// import { CallBackHook } from './Memos/CallBackHook';
// import { MemoHook } from './Memos/MemoHook';
// import { Memorize } from './Memos/Memorize';
// import { MultipleCustomHokks } from './Examples/MultipleCustomHokks';
// import { Layout } from './UseLayoutEffect/Layout';
//import { FormWithCustomHook } from './UseEffect/FormWithcustomHook';
//import { SimpleForm } from './UseEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './UseState/CounterApp';
// import { CounterWithCustomHook } from './UseState/CounterWithCustomHook';
import '../src/UseReducer/intro-reducer';
import { TodoApp } from './UseReducer/TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<Padre/>
    // <FocusScreen/>
    <TodoApp/>
);