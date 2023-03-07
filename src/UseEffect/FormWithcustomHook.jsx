import { useEffect, useState } from "react";
import { useForm } from "../Hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  let myObj = {
    username: "",
    email: "",
    password: "",
  };

  const { formState, onInputChange, username, password, email, onResetForm } = useForm(myObj);

  // const { username, email, password } = formState;

  // const onResetForm = () => {
  //   document.querySelectorAll('input').forEach(e => e.value = "")
  // }

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {username === "Alejandross" && <Message />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="alejoquevedo0598@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-3">borrar</button>
    </>
  );
};
