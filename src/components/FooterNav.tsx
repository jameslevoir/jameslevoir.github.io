import React from 'react'

const FooterNav = () => {
  return (
    <nav className="container" id="footer-nav">
        <ul>
            <li><a href="https://www.linkedin.com/in/jameslevoir/" target="blank"><img src="/public/SVG/linkedin.svg" /></a></li>
            <li><a href="https://github.com/jameslevoir" target="blank"><img src="/public/SVG/github.svg" /></a></li>
            <li><a href="mailto:jameslevoir@gmail.com"><img src="/public/SVG/email.svg" /></a></li>
        </ul>
    </nav>
  )
}

export default FooterNav