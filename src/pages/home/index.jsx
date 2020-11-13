import React from 'react';
import {Footer} from "../../parts/footer";

import { Button, Carousel } from 'react-bootstrap'

import '../../assets/scss/home.scss'
import mainImage from '../../assets/images/sms.jpg'
import image1 from '../../assets/images/image1.jpeg'
import image2 from '../../assets/images/image2.jpeg'
import image3 from '../../assets/images/image3.jpeg'
import image4 from '../../assets/images/image4.jpeg'
import image5 from '../../assets/images/image5.jpeg'
import carousel1 from '../../assets/images/carousel1.png'
import carousel2 from '../../assets/images/carousel2.png'
import carousel3 from '../../assets/images/carousel3.jpg'

export const Home = () => {
  return (
    <div className="home">
      <div className="content-wrapper">
        <img className="mainImage" src={mainImage} alt="main" />
        <div>
          <Button variant="success">서비스 바로 시작하기</Button>{' '}
        </div>

        <div className="carousel-wrapper">
          <Carousel className="carousel">
            <Carousel.Item className="carousel-items">
              <img
                src={carousel1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>first title</h3>
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                src={carousel2}
                alt="second slide"
              />
              <Carousel.Caption>
                <h3>second title</h3>
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-items">
              <img
                src={carousel3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>third title</h3>
                <p>description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <img src={image1} alt="1" />
        <img src={image2} alt="2" />
        <img src={image3} alt="3" />
        <img src={image4} alt="4" />
        <img src={image5} alt="5" />
      </div>
      <Footer />
    </div>
  )
}
