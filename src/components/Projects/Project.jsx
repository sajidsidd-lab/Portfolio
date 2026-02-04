import React from 'react'
import Card from "../Card/Card"
import "./Project.css"
import desibite from "../../assets/desibite.png"
import course from "../../assets/course.png"
import wanderlust from "../../assets/wanderlust.png"
import video from "../../assets/video.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
    useGSAP(()=>{
         gsap.from("#para",{x:-150,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scrub:2,
     
        start:"top 80%",
        end:"top 20%"


      }}
    )
      gsap.from(".slider",{x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scrub:2,
     
        start:"top 80%",
        end:"top 20%"


      }}
    )

    
    

    })
    return (
        <div id="projects">
            <h1 id="para">Decent Experienced in project</h1>
            <div className="slider">
                <Card title=" WANDERLUST A HOTEL LISTING WEBSITE" image={wanderlust}/>
                  <Card title="DESIBITE A FOOD DELIVERY WEBSITE" image={desibite} />
                <Card title="COURSE RECOMMENDOR SYSTEM" image={course} />
                <Card title="VIDEO CALL PLATFORM" image={video} />
              

            </div>
        </div>
    )
}

export default Projects