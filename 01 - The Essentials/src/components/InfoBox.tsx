import { type ReactNode } from "react"

type HintBoxProps = {
    mode: 'hint';
    children: ReactNode
}

type WarningBoxProps = {
    mode: 'warning',
    serverity: 'low' | 'medium' | 'high'
    children: ReactNode
}

// Discriminated union types
type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps) { // info, warning
    const {children, mode} = props
    if(mode === 'hint') {
        return (
          <aside className="infobox infobox-hint">
            <p>{children}</p>
          </aside>
        );
    }

    // if we reached this part, the mode is not hint
    // so we can now access serverity
    const {serverity} = props
    return (
    <aside className={`infobox infobox-warning warning--${serverity}`}>
        <h2>Warning</h2>
          <p>{children}</p>
        </aside>
      );
    
}