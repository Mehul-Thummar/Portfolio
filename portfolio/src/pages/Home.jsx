import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import About from '../components/About';
import Header from '../components/Header';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <About />
            <ProjectCard />
            <Footer />
        </div>
    )
}

export default Home
