import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LaptopImg from '../../assets/home-main.svg';
import Tilt from 'react-parallax-tilt';
import Social from '../../components/Contact/Social';
const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, my name is <span className="yellow">Nguyen Duy Khang </span>
              and I'm from{' '}
              <span className="yellow"> Ho Chi Minh, Viet Nam</span>
              <br />
              <br />
              I am a final year student majoring in software engineering at the
              Ho Chi Minh City University of Foreign Languages – Information
              Technology (HUFLIT)
              <br />
              <br />
              As a<b className="yellow"> Web Developer </b>, I enjoy tackling
              new challenges and continuously expanding my skillset.
              <br />
              <br /> I'am a programmer with solid knowledge and understanding of
              <b className="yellow"> C# and Javascript </b>
              as well as proficiency in frameworks such as
              <b className="yellow">
                {' '}
                ASP.NET Core, ASP.NET MVC, ReactJS and NodeJS
              </b>
              <br />
              <br />I also have experience with database management systems such
              as
              <b className="yellow"> SQL Server, MySQL and MongoDB</b>
              <br />
              <br /> I have a good understanding of important concepts such as
              <b className="yellow">
                {' '}
                OOP, Design Pattern ,Data Structures and Algorithms{' '}
              </b>
              {/* as well as exploring areas related to */}
              <b className="yellow"> .</b>
              <br />
              <br />I am passionate about technology and constantly updating my
              knowledge to apply to my work and create high-quality products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Social />
        </Row>
      </Container>
    </Container>
  );
};

export default About;
