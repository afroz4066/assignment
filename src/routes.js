import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/Hero";
import Services from "./components/Services";
import OurTeam from "./components/OurTeam";
import ImportantLink from "./components/ImportantLinks";
import AboutUs from "./components/AboutUs";
import Press from "./components/PressRelease";
import Gallery from "./components/Gallery";
import Criminal from "./components/Criminal";
import News from "./components/News";
import Footer from "./components/Footer";
import Main from "./components/Main";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Main} />
        <Route path="/hero" component={HeroSection} />
        <Route path="/services" component={Services} />
        <Route path="/ourteam" component={OurTeam} />
        <Route path="/important-link" component={ImportantLink} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/press" component={Press} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/criminal" component={Criminal} />
        <Route path="/news" component={News} />
        <Route path="/footer" component={Footer} />
      </Routes>
    </Router>
  );
};

export default Routes;
