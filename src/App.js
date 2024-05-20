import "./App.css";
import Header from "./components/Header";
import HeaderBase from "./components/HeaderBase";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import CourseList from "./components/CourseList";
import RefundOffer from "./components/RefundOffer";
import Hiring from "./components/Hiring";
import Certificates from "./components/Certificates";
import Internship from "./components/Internship";

function App() {
    return <div className="App">
        <Header/>
        <HeaderBase/>
        <Hero/>
        <Stats/>
        <CourseList/>
        <RefundOffer/>
        <Hiring/>
        <Certificates/>
        <Internship/>
    </div>;
}

export default App;
