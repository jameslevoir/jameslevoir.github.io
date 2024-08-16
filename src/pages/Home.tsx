import MainContent from "../components/MainContent";
import SideContent from "../components/SideContent";
import Button from '../components/Button';

const Home = () => {
    return (
        <>
        <MainContent>
            <h1>Hi, I’m James LeVoir &#128075;</h1>
            <h2>I'm a designer, developer, and AV specialist from Minnesota</h2>
            <ul>
                <li>Academic background in Computer Science, Web Design, and Front-End Development.</li>
                <li>Professional experience working in the audio/visual field including live mixing, recording, and livestreaming.</li>
                <li>Experience in leadership roles academically and professionally, from leading student organizations to coordinating volunteers.</li>
            </ul>
            <Button link="/Résumé.pdf" text="View My Résumé" />
        </MainContent>
        <SideContent content="profile-picture">
            <img src="/profile-picture.jpg"></img>
        </SideContent>
        </>
    )
};
  

export default Home