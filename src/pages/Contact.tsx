import MainContent from '../components/MainContent'
import Body from "../components/Body"
import Button from "../components/Button"

const Contact = () => {
  return (
    <MainContent>
      <h1>Contact</h1>
      <p>Feel free to reach out to me via <a href="https://www.linkedin.com/in/jameslevoir/" target="_blank">LinkedIn</a> or send me an email directly. I look forward to hearing from you!</p>
      <Button text="Email Me" link="mailto:jameslevoir@gmail.com" />
    </MainContent>
  )
}

export default Contact