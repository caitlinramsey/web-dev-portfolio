import Landing from "../src/pages/landing/Landing";
import Home from "../src/pages/home/Home";
import Navigation from '../src/components/nav/Navigation';
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
