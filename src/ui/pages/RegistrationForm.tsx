import React from 'react';
import { Container } from 'react-bootstrap';
import RegistrationFormComp from '../components/RegistrationForm/RegistrationForm';

const RegistrationForm: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <RegistrationFormComp />
    </Container>
  );
};

export default RegistrationForm;
