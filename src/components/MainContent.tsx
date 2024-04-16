import React, { ReactNode } from 'react'
import Button from './Button'

const AboutMe = (props: {children: ReactNode}) => {
  return (
    <div className="main-content container">
        {props.children}
    </div>
  )
}

export default AboutMe