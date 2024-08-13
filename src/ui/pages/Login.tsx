import React from 'react';
import { Container } from 'react-bootstrap';
import Login from '../components/Login/Login';

const RegistrationForm: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <Login />
    </Container>
  );
};

export default RegistrationForm;
