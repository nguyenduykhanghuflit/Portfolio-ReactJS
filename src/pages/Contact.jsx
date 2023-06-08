import React from 'react';
import { Container } from 'react-bootstrap';
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';

const Contact = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  );
};

export default Contact;
