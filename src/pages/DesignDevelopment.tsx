import MainContent from '../components/MainContent'
import SideContent from '../components/SideContent'
import { Link } from 'react-router-dom'


const DesignDevelopment = () => {
  return (
    <>
      <MainContent>
          <h1>Design/Development</h1>
          <p>As a designer and developer, I think the most important part of my work is making things that are useful and accessible. Good design is not only visually satisfying, but takes the work out of interacting, reading, and processing visual information. When design is good, it often goes unnoticed. When it’s bad, it can be a wall preventing you from achieving your goals. I seek to create projects that can be both bold or subtle while remaining functional and accessible. The simplicity of modern minimalist design inspires me, and I seek to incorporate principles of equity and inclusivity in all of my work.</p>
      </MainContent>
      <SideContent content="gallery">
          <Link to="sunset" className="grid-item"><img src="/design/thumbnail/sunset.png" alt="Sunset Mural Thumbnail" /></Link>
          <Link to="gymscout" className="grid-item"><img src="/design/thumbnail/gymscout.png" alt="GymScout App Thumbnail" /></Link>
          <Link to="sweater" className="grid-item"><img src="/design/thumbnail/sweater.png" alt="Sweater Design Thumbnail" /></Link>
          <Link to="depth" className="grid-item"><img src="/design/thumbnail/depth.png" alt="Depth Poster Thumbnail" /></Link>
      </SideContent>
    </>
  )
}

export default DesignDevelopment