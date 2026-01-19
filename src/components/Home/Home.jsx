import React from 'react';
import "./Home.css";
import man from "../../assets/man.png";
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from(".line1",{duration:1,y:80,opacity:0})
    tl.from(".line2",{duration:1,y:80,opacity:0})
    tl.from(".line3",{duration:1,y:80,opacity:0})
    gsap.from(".righthome img",{duration:1,x:200,opacity:0})
  })
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetail">
          <div className="line1">I'M</div>
          <div className="line2">SAJID RAZA</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "SOFTWARE DEVELOPER", "MERN STACK DEVELOPER"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button class="btn">HIRE ME!</button>
        </div>
      </div>

      <div className="righthome">
        <img src={man} alt=""/>
      </div>
    </div>
  )
}

export default Home;