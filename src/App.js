import Name from "./components/Name/Name";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import ParallaxComponent from "./components/Parallax/Parallax";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div>
      <ParallaxComponent />
      {/* <Name /> */}
      <Works />
      <Fade duration={1500} triggerOnce>
        <AboutMe />
      </Fade>
      <Footer />
    </div>
  );
}

export default App;
