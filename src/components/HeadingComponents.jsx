import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Web_dev from '../images/pngs/Web.png'
import App_Dev from '../images/pngs/app-development.png'
import Cloud from '../images/pngs/Cloud.png';
import Data_Sci from '../images/pngs/data.png';
import AI_ML from '../images/pngs/ml.png';
import Web3 from '../images/pngs/web-30.png'



function HeadingComponents() {
    return <div className="headingDiv">
        <center>
            <Carousel interval={1000}>
                <Carousel.Item interval={1000}>
                    <h2>Web Dev</h2>
                    <img className='headingCarousel' src={Web_dev} alt='First slide' />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h2>App Dev</h2>
                    <img className='headingCarousel' src={App_Dev} alt='Third slide' />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h2>Cloud Dev</h2>
                    <img className='headingCarousel' src={Cloud} alt='Third slide' />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h2>AI/ML</h2>
                    <img className='headingCarousel' src={AI_ML} alt='Third slide' />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h2>Data Science</h2>
                    <img className='headingCarousel' src={Data_Sci} alt='Third slide' />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <h2>Web 3.0</h2>
                    <img className='headingCarousel' src={Web3} alt='Third slide' />
                </Carousel.Item>
            </Carousel>
        </center>
    </div>
}

export default HeadingComponents;