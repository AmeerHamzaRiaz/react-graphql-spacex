import React from 'react'
import video from '../assets/video5-1080.mp4';
import poster from '../assets/poster.png';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Button, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="parent bg-black">
            <video autoPlay muted loop id="myVideo" poster={poster}>
                <source src={video} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
            <div className="hero-container">
                <Logo />
                <Text color="white" mt="20px" fontSize="xl">If your goals don't scare you, they aren't big enough!</Text>
                <Link to="/launches">
                    <Button mt="40px" variant="outline" color="white" variantColor="white" >VIEW ALL LAUNCHES</Button>
                </Link>
            </div>

        </div>
    )
}

export default Home
