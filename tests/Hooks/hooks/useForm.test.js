import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../../src/Hooks/useForm";

describe('Test in useForm hook', () => { 

    const initialForm = {
        name: 'Alejandro',
        email: 'Alejoquevedo@google.com'
    }

    test('should return the default values', () => { 
        const {result} = renderHook(()=> useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function)
          })
     });

     test('expect the name change with the new value', () => { 
        const {result} =  renderHook(()=> useForm(initialForm));
        const {onInputChange} = result.current;
        const newName = 'alejo';
        const obj = {target:{name:'name', value:newName}};
        act(()=>{
                onInputChange(obj);
        });
        expect(result.current.name).toBe(newName);
      })

      test('expect that the form will be the initial form', () => { 
        const {result} =  renderHook(()=> useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        const newName = 'alejo';
        const obj = {target:{name:'name', value:newName}};
        act(()=>{
                onInputChange(obj);
                onResetForm();
        });
        expect(result.current.name).toBe(initialForm.name);
      })
 });