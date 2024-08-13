import React from 'react';
import SectionOne from '../components/Company/sectionOne/SectionOne';
import SectionTwo from '../components/Company/sectionTwo/SectionTwo';
import { Container } from 'react-bootstrap';

const Company: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <SectionOne />
      <SectionTwo />
    </Container>
  );
};

export default Company;
