import React, { JSXElementConstructor } from 'react'

const Body = (props: {children: React.ReactNode}) => {
  return (
    <div className="body-content">{props.children}</div>
  )
}

export default Body