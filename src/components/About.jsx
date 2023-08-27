import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import WebDev from '../images/Example.jpg'
import AppDev from '../images/App_dev.jpg'
import CloudDev from '../images/Cloud_dev.webp'
import AI_ML from '../images/AI_ML.jpg'
import DataScience from '../images/Data_Science.jpg'
import Web3 from '../images/Web_3.jpg'

function About() {
    return <>
        <div id="aboutUs" className="aboutDiv">
            <hr />
            <h1>About Us</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
            {/* Carousel */}
            <center>
                <Carousel interval={1000}>
                    <Carousel.Item interval={1000}>
                        <img className='d-block' src={WebDev} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='d-block' src={AppDev} alt='Third slide' />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='d-block' src={CloudDev} alt='Third slide' />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='d-block' src={AI_ML} alt='Third slide' />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='d-block' src={DataScience} alt='Third slide' />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='d-block' src={Web3} alt='Third slide' />
                    </Carousel.Item>
                </Carousel>
            </center>
        </div>
    </>
}

export default About;