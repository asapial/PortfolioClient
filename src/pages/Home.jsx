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
            <Hero></Hero>
            <ResumeSection></ResumeSection>
            <MyProjects></MyProjects>
            <AboutMe></AboutMe>
            <ContactWithMeSection></ContactWithMeSection>
        </div>
    );
};

export default Home;