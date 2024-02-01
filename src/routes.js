import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import CitizenServices from "./components/CitizenServices";
import HelplineNo from "./components/HelplineNo";
import Notification from "./components/Notification";
import Download from "./components/Download";
import Media from "./components/Media";
import ContactUs from "./components/ContactUs";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/citizen-services" component={CitizenServices} />
        <Route path="/helpline-no" component={HelplineNo} />
        <Route path="/notification" component={Notification} />
        <Route path="/download" component={Download} />
        <Route path="/media" component={Media} />
        <Route path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default Routes;
