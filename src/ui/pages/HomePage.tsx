import React, { useEffect, useState } from 'react';
import FirstSection from '../components/HomePage/firstSection/FirstSection';
import AboutUsSection from '../components/HomePage/aboutUsSection/AboutUsSection';
import CertificationSection from '../components/HomePage/certificationSection/CertificationSection';
import CarouselCard from '../components/HomePage/carouselCard/CarouselCard';
import { Page1 } from '../carousel/index';
import SocialSection from '../components/HomePage/socialSection/SocialSection';
import { Container } from 'react-bootstrap';
import WelcomeModal from '../components/Modal/WelcomeModal';
import axios from 'axios';
import Footer from '../components/Footer/Footer';

const Membership: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const [courses, setCourses] = useState([Page1]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/coursesTop');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    checkLastVisit();
  }, []);
  const cards = [...courses];
  const checkLastVisit = () => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = new Date().getTime();
    const thirtyDays = 0 * 24 * 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > thirtyDays) {
      setShowModal(true);
      localStorage.setItem('lastVisit', now.toString());
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container fluid className="app-container">
      <FirstSection />
      <AboutUsSection />
      <CertificationSection />
      <CarouselCard cards={cards.flat()} />
      <SocialSection />
      
      <Footer />
    </Container>
  );
};

export default Membership;

//<WelcomeModal show={showModal} handleClose={handleCloseModal} />