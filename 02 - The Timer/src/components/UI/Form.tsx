import { FormEvent, type ComponentPropsWithoutRef, useRef, useImperativeHandle, forwardRef } from "react"

export type formHandle = {
    clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    // we dont know in advance what the value will be
    onSave: (value: unknown) => void // wont return anything
}

// since we use a function as props, we need to destructure the props
// so it wont return an error in the html element
const Form = forwardRef<formHandle, FormProps>(function Form({onSave, children, ...otherProps}, ref) {
    const formRef = useRef<HTMLFormElement>(null); // not the same ref as the ref from the parameter
    function handleSubmit(form: FormEvent<HTMLFormElement>) {
        form.preventDefault();

        // this hook only works in component that recieves a forwarded ref
        // callable method to other components
        useImperativeHandle(ref, () => {
            return {
                clear() {
                    console.log("Clearing")
                    formRef.current?.reset() // resetting the form with the ref
                }
            }
        });
        // for this to work, the input element need the name built-in prop
        const formData = new FormData(form.currentTarget); // Group the data into data object
        const data = Object.fromEntries(formData); // Convert the formdata to a better object
        onSave(data);
        
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps} ref={formRef}>
            {children}
        </form>
    )
})

export default Form;