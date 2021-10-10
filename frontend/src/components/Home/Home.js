import React from 'react';
import './Home.css';
import Header from './layout/Header/Header';
import Navbar from './layout/Navbar/Navbar';
import Card from './layout/ImgCard/Card';


const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Card />
        </>    
    )
}

export default Home;
