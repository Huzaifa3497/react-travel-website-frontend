import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function Carousal2() {
  return (
    <div>
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
            src="image/aaaaaaa.jpg"
          alt="First slide"
          height={500}
          width={200}
        />
        <Carousel.Caption>
          
          <h3>SWAT</h3>
          <p>Trip is available</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/swat.JPG"
          alt="Second slide"
          height={500}
          width={200}
        />
 <Carousel.Caption>
          
          <h3>KASHMIR</h3>
          <p>Trip is available</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image/ali.jpg"
          alt="Second slide"
          height={500}
          width={200}
        />
        <Carousel.Caption>
          <h3>KURMAT</h3>
          <p>Trip is available</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousal2