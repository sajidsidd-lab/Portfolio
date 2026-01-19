import React from 'react'
import "./About.css"
import Card from "../Card/Card"
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import dsa from "../../assets/dsa.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scrub:2,
     
        start:"top 60%",
        end:"top 20%"


      }}
    )

        gsap.from(".line",{x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scrub:2,
    
        start:"top 60%",
        end:"top 30%",


      }}
    )

      gsap.from(".aboutdetail h1",{x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetail h1",
        scrub:2,
      
        start:"top 60%",
        end:"top 30%",


      }}
    )
      gsap.from(".aboutdetail ul",{y:100,
      duration:2,
      opacity:0,
      
      scrollTrigger:{
        trigger:".aboutdetail ul",
        scrub:2,
      
        start:"top 60%",
        end:"top 30%",


      }}
    )
    
       gsap.from(".rightabout ",{x:200,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scrub:2,
       
        start:"top 60%",
        end:"top 30%",


      }}
    )
  })
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>

        </div>
        <div className="aboutdetail">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>Name</span>: SAJID RAZA
              </li>
                <li>
                <span>Age</span>: 23
              </li>
                <li>
                <span>Gender</span>: MALE
              </li>
                <li>
                <span>Language Known</span>: HINDI & ENGLISH
              </li>
            </ul>
          </div>

          <div className="Education">
            <h1>Educational Detail</h1>
            <ul>
              <li>
                <span>DEGREE</span>: B.TECH CSE
              </li>
                <li>
                <span>Duration</span>:  2022-2026
              </li>
                <li>
                <span> CGPA</span>: 7.5
              </li>
               
            </ul>
          </div>
          <div className="Skills">
            <h1>Skills</h1>
            <ul>
              <li>
               MERN STACK DEVELOPER
              </li>
                <li>
                DSA
              </li>
                <li>
               JAVA
              </li>
               
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout" >
       <Card title='MERN STACK WEB DEVELOPER' image={mern}/>
       <Card title='JAVA' image={java}/>
       <Card title='DSA' image={dsa}/>

      </div>

    </div>
  )
}

export default About