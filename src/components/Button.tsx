import React from 'react'

const clickHandler = (link: string) => {
    window.open(link);
}

const Button = (props: {text: string, link: string}) => {
  return (
    <button type="button" onClick={()=>clickHandler(props.link)}>
        {props.text}
    </button>
  )
}

export default Button