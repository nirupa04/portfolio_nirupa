import React from 'react'
import Navbars from "./navbar"
import Hero from "./Hero"
import "./Home.css"
import Skills from "./Skills"
import Contact from "./Contact"
import Aboutme from "./Aboutme"
import Project from "./Project"

function Home() {
  return (
    <>
    <div className='bg-black'>
    <div className='top-0 nav-p'>
        <Navbars></Navbars>
    </div>

    <section className='screen-p'>
        <Hero></Hero>
    </section>
    <div className='screen-p'>
        <Aboutme></Aboutme>
    </div>

    <div className='screen-p'>
        <Skills/>
    </div>
    <div className='screen-p'>
      <Project/>
    </div>

    <div className='screen-p'>
      <Contact/>
      </div>
      </div>
      

    </>

  )
}

export default Home