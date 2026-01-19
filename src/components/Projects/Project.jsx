import React from 'react'
import Card from "../Card/Card"
import "./Project.css"
import va from "../../assets/va.png"
import fw from "../../assets/fw.png"
import br from "../../assets/br.png"
import tti from "../../assets/tti.png"
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
                <Card title=" VIRTUAL ASSISTANT" image={va}/>
                <Card title="AI POWERED FITNESS WEBSITE" image={fw} />
                <Card title="AI TEXT TO IMAGE" image={tti} />
                <Card title="AI BACKGROUND REMOVER" image={br} />

            </div>
        </div>
    )
}

export default Projects