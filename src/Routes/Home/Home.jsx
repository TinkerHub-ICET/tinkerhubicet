import Navbar from "../../Components/Navbar/Navbar";
import group from "../../assets/group.png";
import about from "../../assets/about.png";

import "./Home.css";
export default function Home() {
    return(
        <>
            <Navbar/>
            <div className="home-container">
                <div className="home-content">
                    <img src={group} className="home-image" alt=""/>
                    <div className="home-content-text">
                        <h1>TinkerHub ICET</h1>
                        <p>
                        The world is changing, and we want India to be ready. We're here to make sure that everyone has access to the knowledge required to set the course for a better future.

                        </p>
                        <button className="join-button" onClick={(e)=>{e.preventDefault();window.location.href ="https://join.tinkerhub.org";}}>Join Us</button>
                    </div>
                </div>
            </div>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-content-text">
                        <h2>Who are we?</h2>
                        <p> We are a group of tinkerers who are passionate about Technology</p>
                    </div>
                </div>
                <img src={about} className="about-image" alt=""/>
            </div>
        </>
    )
}