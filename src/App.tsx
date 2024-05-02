import Home from './pages/Home';
import DesignDevelopment from './pages/DesignDevelopment';
import AudioVisual from './pages/AudioVisual';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import RootLayout from './pages/RootLayout';
import DesignDevProjects from './pages/DesignDevProjects';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="design-development" element={<DesignDevelopment />} />
      <Route path="design-development/:projectName" element={<DesignDevProjects />} />
      <Route path="audio-visual" element={<AudioVisual />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  );
}

export default App;