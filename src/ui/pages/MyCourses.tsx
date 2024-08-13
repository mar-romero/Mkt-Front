import React from 'react';
import MisCursos from '../components/MyCourses/MyCourses';
import ContentSection from '../components/Membership/contentSection/ContentSection';
import { Container } from 'react-bootstrap';

const MyCourses: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <MisCursos />
    </Container>
  );
};

export default MyCourses;
