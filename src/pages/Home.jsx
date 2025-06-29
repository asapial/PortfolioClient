import React from 'react';
import Hero from '../components/Hero';

import AboutMe from '../components/AboutMe';
import ResumeSection from '../components/ResumeSection';
import ContactWithMeSection from '../components/ContactWithMeSection';
import MyProjects from '../components/MyProjects';
import { Footer } from 'rsuite';

const Home = () => {
    return (
<div>
  <div id="home">
    <Hero />
  </div>
  
  <div id="resume">
    <ResumeSection />
  </div>

  <div id="projects">
    <MyProjects />
  </div>

  <div id="about">
    <AboutMe />
  </div>

  <div id="contact">
    <ContactWithMeSection />
  </div>
</div>

    );
};

export default Home;