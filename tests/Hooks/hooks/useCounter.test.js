import { renderHook, act } from "@testing-library/react"
import { useCounter } from "../../../src/Hooks/useCounter";

describe('Pruebas en use Counter', () => {
    test('should first', () => {
        const { result: { current: { counter, increment, decrement, resetVal } } } = renderHook(() => useCounter());
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(resetVal).toEqual(expect.any(Function))
    });
    test('should be 100', () => {
        const { result: { current: { counter } } } = renderHook(() => useCounter(100));
        expect(counter).toBe(100)
    });
    test('should increment the counter', () => { 
        const { result } = renderHook(() => useCounter());
        const {increment} = result.current;
        act(()=>{
            increment();
            increment(2);
        });
        expect(result.current.counter).toBe(13)
     });
     test('should decrement the counter', () => { 
        const { result } = renderHook(() => useCounter());
        const {decrement, counter} = result.current;
        act(()=>{
            decrement();
        });
        expect(result.current.counter).toBe(counter -1 );
     });
     test('should be the default value', () => { 
        const { result } = renderHook(() => useCounter(100));
        const {resetVal, increment} = result.current;
        act(()=>{
            increment();
            resetVal();
        });
        expect(result.current.counter).toBe(100);
     })
})