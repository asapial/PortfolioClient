import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExperienceSection from '../components/ExperienceSection ';
import AboutMe from '../components/AboutMe';
import EducationSection from '../components/EducationSection';
import ResumeSection from '../components/ResumeSection';
import EducationAndSkills from '../components/EducationAndSkills';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <EducationSection></EducationSection>
            <ResumeSection></ResumeSection>
            <EducationAndSkills></EducationAndSkills>
            <AboutMe></AboutMe>
            <ExperienceSection></ExperienceSection>
        </div>
    );
};

export default Home;