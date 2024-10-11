import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Header from '../components/Header';
import Skill from '../components/Skill';
import Education from '../components/Education';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Education />
            <Skill />
            <ProjectCard />
            <Footer />
        </div>
    )
}

export default Home
