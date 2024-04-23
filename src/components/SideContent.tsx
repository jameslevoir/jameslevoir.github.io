import React, {ReactNode} from 'react'

const SideContent = (props: {children: ReactNode, content: "profile-picture" | "gallery" | undefined}) => {
    const className = "side-content container" + (props.content ? ` ${props.content}` : "");

    return (
        <div className={className}>
        {props.content == "gallery" ? (
            <div className="grid-container">{props.children}</div>
        ) : (
            props.children
        )}
        </div>
    )
}

export default SideContent