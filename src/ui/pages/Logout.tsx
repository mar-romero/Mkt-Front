import React from 'react';
import { Container } from 'react-bootstrap';
import Logout from '../components/Login/Logout';


const LogoutPage: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <Logout />
    </Container>
  );
};

export default LogoutPage;
