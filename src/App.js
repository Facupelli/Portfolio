import Name from "./components/Name/Name";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import ParallaxComponent from "./components/Parallax/Parallax";

function App() {
  return (
      <div>
        <ParallaxComponent />
        {/* <Name /> */}
        <Works />
        <AboutMe />
        <Footer />
      </div>
  );
}

export default App;
