import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Alejandro',
        email: 'alejo@google.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {value, name} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{
        //console.log('formState changed!')
    },[formState])

    useEffect(()=>{
        //console.log('useEffect called!')
    },[])

    useEffect(()=>{
        // console.log('email changes!')
    },[email])

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {(username === 'Alejandro') &&  <Message/>}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="alejoquevedo0598@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}

      />

    
    </>
  );
};
