// src/infrastructure/ui/pages/Home.tsx
import React from 'react';
import UnitList2 from '../components/UnitList/UnitList2';
import { Container } from 'react-bootstrap';


const Course2: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <h1 className="mt-4">Unidades</h1>
      <UnitList2 />
    </Container>
  );
};

export default Course2;
