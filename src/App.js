import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import ContactMe from "./Component/ContactMe/ContactMe";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Component/Projects/Projects";
import Footersec from "./Component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header />
        <About />
        <Projects/>
        <Resume />
        <ContactMe />
        <Footersec/>
      </BrowserRouter>
    </>
  );
}

export default App;
