import { type FC, type PropsWithChildren } from "react";

type Props = PropsWithChildren<{title: string, id: number, onDelete: (id: number) => void}>
// propswithchildren contains the default "children"-prop, no need to manually add it to the props

// FC means we make the function component into a functionComponent type, add add the props into it, and then extract it
// when we extract the props, we dont need to say props.prop to access the prop, but if there is a lot of props,
// maybe it would be better to use it with props.prop
export const CourseGoal: FC<Props> = ({title, children, id, onDelete}) => {
    return (
        <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
    )   
}