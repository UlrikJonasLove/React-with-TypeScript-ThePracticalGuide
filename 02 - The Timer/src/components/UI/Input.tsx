import { type ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'> // getting default input props

// first type in generic is the ref type, second is the props the wrapped function will take
const Input = forwardRef<HTMLInputElement, InputProps>( // this includes the ref parameter
    function Input({label, id, ...props}, ref) {
        return (
            <p>
                <label htmlFor={id}>{label}</label>
                <input id={id} name={id} {...props} ref={ref}/>
            </p>
        )
})

export default Input;