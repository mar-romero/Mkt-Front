import React from 'react';
import Membership from '../components/Membership/membership/Membership';
import ContentSection from '../components/Membership/contentSection/ContentSection';
import { Container } from 'react-bootstrap';

const MembershipPages: React.FC = () => {
  return (
    <Container fluid className="app-container">
      <Membership />
      <ContentSection />
    </Container>
  );
};

export default MembershipPages;
