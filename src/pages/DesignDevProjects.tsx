import React from 'react';
import { useParams } from 'react-router-dom';
import MainContent from "../components/MainContent";
import SideContent from '../components/SideContent';

const DesignDevProjects = () => {
    const { projectName } = useParams<{ projectName: string }>();
    const aboutText = {
        "blueprint": "This website was made using HTML and SCSS for the Minneapolis College Apparel Department’s 2024 showcase. Design elements such as the logo and needle elements were made using Illustrator, and the rest was programmed by myself using SCSS. This website is responsive and has a mobile and tablet layout, as well as providing detailed information on each of the designers’ works!",
        "depth": "This poster, created in Adobe Illustrator, was an experiment in typography and design. The goal was to use the word “DEPTH” to illustrate the concept of depth. This work uses principles of distance, transparency, and scale to create the illusion of movement and weight, while remaining minimalist in the design approach.",
        "gymscout": "This project is a prototype for a mobile app built using Figma. The purpose of this app is to allow its users to locate open gyms in their area, see reviews of these spaces, and ultimately find community centered around team sports. This project went through multiple phases of development and user research, including personas and user experience testing.",
        "sunset": "This work, made in Illustrator, was an artistic endeavor to represent the setting sun on a lake using clean lines and gradients. I think the combination of this art style in a mural setting is visually interesting, to see clean line work made faded and rough from texture.",
        "sweater": "This project is a Minneapolis College sweater design made using Illustrator. The logo went through several iterations before arriving on this design which is simple and elegant while remaining visually interesting. This project had several constraints which are typical for clothing design, such as limited space and a small color palette."
    }
  return (
    <>
    <MainContent>
        <h1 style={{textTransform: "capitalize"}}>{projectName}</h1>
        <img src={`/design/full/${projectName}.jpg`} alt={`${projectName} Project`} />
    </MainContent>
    <SideContent content = {undefined}>
        <p>{aboutText[projectName as keyof typeof aboutText]}</p>
    </SideContent>
    </>
  )
}

export default DesignDevProjects