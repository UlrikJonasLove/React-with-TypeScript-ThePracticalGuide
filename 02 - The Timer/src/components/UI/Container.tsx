// this is a generic polymorphic component
// this component is not very useful in this project
// a better way would be to have some re-used styling for other parts of the app
// and use this component for the styling
import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

type containerProps<T extends ElementType> = { // placeholder for generic type
    as?: T; // html elements
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({as, children, ...props}: containerProps<C>) {
    const Component = as || 'div'; // Need uppercase so we can use it as a Component
    return <Component {...props}>{children}</Component>
}