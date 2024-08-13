import React from 'react';
import HeroSection from '../components/AboutSection/heroSection/HeroSection';
import { Container } from 'react-bootstrap';
import AboutMemberships from '../components/AboutSection/aboutMemberships/AboutMemberships';

const Company: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <HeroSection />
      <AboutMemberships />
    </Container>
  );
};

export default Company;
