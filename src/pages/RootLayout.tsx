import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Body from '../components/Body'
import FooterNav from '../components/FooterNav'
import MobileNavBar from '../components/MobileNavBar'

function RootLayout() {
  return (
      <>
        <MobileNavBar />
        <NavBar />

        <Body>
            <Outlet />
        </Body>

        <FooterNav />
      </>
  )
}

export default RootLayout