import React from 'react'
import con from "../../assets/contact.png"
import "./Contact.css"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)


function Contact() {
  useGSAP(()=>{
     gsap.from(".leftcontact img",{y:-100,
      duration:1,
      opacity:0,
    
      scrollTrigger:{
        trigger:".leftcontact img",
        scrub:2,
     
        start:"top 80%",
        end:"top 30%"


      }}
    )

     gsap.from(".social-grid",{y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".social-grid",
         scrub:2,
        start:"top 80%",
        end:"top 30%"


      }}
    )

     gsap.from(".rightcontact",{y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightcontact",
        scrub:2,
        start:"top 80%",
        end:"top 30%"


      }}
    )
  })
  return (
    <div id="contact">
       <div className="leftcontact">
        <img src={con} alt="Contact" />

       <div className="socialsite">
  <h2 id="social">You Can Review</h2>

  <div className="social-grid">
    <div className="contact-box">
      <h3>Github</h3>
      <a href="https://github.com/sajidsidd-lab">Visit</a>
    </div>

    <div className="contact-box">
      <h3>LinkedIn</h3>
      <a href="#">Profile</a>
    </div>

    <div className="contact-box">
      <h3>Gmail</h3>
      <a href="mailto:sajidsidd30@gmail.com">Gmail</a>
    </div>

    <div className="contact-box">
      <h3>Mobile</h3>
      <p>+91 8840097543</p>
    </div>
  </div>
</div>

      </div>


        <div className="rightcontact">
               <form className="contact-form" action="https://formspree.io/f/mreeejra" method='POST'>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="Username" required placeholder='Enter The Name' />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required placeholder='Enter Email'/>

          <label htmlFor="message">Message:</label>
          <textarea id="textarea" name="message" rows="5"  placeholder='Write The message'required></textarea>

          <button id="btn" type="submit">Send</button>
        </form>

       
        </div>
    </div>
  )
}

export default Contact