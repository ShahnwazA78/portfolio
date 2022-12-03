import Navbar from "./Component/Navbar/Navbar";
import "./App.css";
import Header from "./Component/Header/Header";
import About from "./Component/About/About";
import Resume from "./Component/Resume/Resume";
import ContactMe from "./Component/ContactMe/ContactMe";
import { BrowserRouter } from "react-router-dom";
import Projects from "./Component/Projects/Projects";
import Footersec from "./Component/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

function App() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop
                    viewBox="0 0 0 0"
                    component={<BsFillArrowUpSquareFill size={40} />}
                />
               
                <Navbar />
                <Header />
                <About />
                <Projects />
                <Resume />
                <ContactMe />
                <Footersec />
            </BrowserRouter>
        </>
    );
}

export default App;
