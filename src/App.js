import Landing from "../src/pages/landing/Landing";
import Home from "../src/pages/home/Home";
import Navigation from '../src/components/nav/Navigation';
import About from '../src/pages/about/About';
import FrontEnd from '../src/pages/front-end/Front-End';
import BackEnd from '../src/pages/back-end/Back-End';
import FullStack from '../src/pages/full-stack/FullStack';
import WebDevServices from '../src/pages/web-dev-services/WebDevServices';
import GraphicDesignProjects from '../src/pages/graphic-design-projects/GraphicDesignProjects';
import GraphicDesignServices from '../src/pages/graphic-design-services/GraphicDesignServices';
import Contact from '../src/pages/contact/Contact';
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";

function AppWithNavigation() {
  const currentLocation = useLocation();
  const isLandingPage = currentLocation.pathname === '/';

  return (
    <>
        {!isLandingPage && <Navigation />}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/frontend" element={<FrontEnd />} />
          <Route exact path="/backend" element={<BackEnd />} />
          <Route exact path="/fullstack" element={<FullStack />} />
          <Route exact path="/webdevservices" element={<WebDevServices />} />
          <Route exact path="/graphicdesignprojects" element={<GraphicDesignProjects />} />
          <Route exact path="/graphicdesignservices" element={<GraphicDesignServices />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWithNavigation />
    </Router>
  )
}

export default App;
