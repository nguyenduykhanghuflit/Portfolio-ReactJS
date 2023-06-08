import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year} by NguyenDuyKhang</span>
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/nguyenduykhanghuflit"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/ndk25"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/nguyen-duy-khang-346a25250/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <AiOutlineLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
