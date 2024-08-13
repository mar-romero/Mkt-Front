// src/infrastructure/ui/pages/Home.tsx
import React from 'react';
import UnitList from '../components/UnitList/UnitList';
import { Container } from 'react-bootstrap';


const Course: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <h1 className="mt-4">Unidades</h1>
      <UnitList />
    </Container>
  );
};

export default Course;
