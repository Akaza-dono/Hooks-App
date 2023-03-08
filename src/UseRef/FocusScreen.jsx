import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
    const onInput = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus screen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button className="btn btn-success mt-3"
                onClick={onInput}>
                Focus
            </button>
        </>
    );
};
