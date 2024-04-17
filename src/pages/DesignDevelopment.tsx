import MainContent from '../components/MainContent'
import SideContent from '../components/SideContent'


const DesignDevelopment = () => {
  return (
    <>
      <MainContent>
          <h1>Design/Development</h1>
          <p>As a designer and developer, I think the most important part of my work is making things that are useful and accessible. Good design is not only visually satisfying, but takes the work out of interacting, reading, and processing visual information. When design is good, it often goes unnoticed. When it’s bad, it can be a wall preventing you from achieving your goals. I seek to create projects that can be both bold or subtle while remaining functional and accessible. The simplicity of modern minimalist design inspires me, and I seek to incorporate principles of equity and inclusivity in all of my work.</p>
      </MainContent>
      <SideContent content="gallery">
          <a href="" className="grid-item"><img src="/src/assets/design/sunset.png" alt="Sunset Mural Thumbnail" /></a>
          <a href="" className="grid-item"><img src="/src/assets/design/gymscout.png" alt="GymScout App Thumbnail" /></a>
          <a href="" className="grid-item"><img src="/src/assets/design/sweater.png" alt="Sweater Design Thumbnail" /></a>
          <a href="" className="grid-item"><img src="/src/assets/design/depth.png" alt="Depth Poster Thumbnail" /></a>
      </SideContent>
    </>
  )
}

export default DesignDevelopment