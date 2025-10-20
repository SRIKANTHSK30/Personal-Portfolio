import { useState } from 'react'

import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import ProfessionalSkills from './Components/ProfessionalSkills'
import ExperienceMaze from './Components/Experience'
import EducationCard from './Components/Education'
import ProjectsShowcase from './Components/Projects'
import CertificationShowcase from './Components/Certifications'
import ContactSplitForm from './Components/Contact'
import Footer from './Components/Footer'
import ApproachSection from './Components/Approach'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <ProfessionalSkills/>
      <ExperienceMaze/>
      <ApproachSection/>
      <EducationCard/>
      <ProjectsShowcase/>
      <CertificationShowcase/>
      <ContactSplitForm/>
      <Footer/>
    </>
  )
}

export default App
