import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import CursosPage from '../components/CursosPage/coursePage/CoursePage';


const CursosPage2: React.FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:3001/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleSearch = async (query: string) => {
    try {
      const response = await axios.get(`http://localhost:3001/${query}`);
      setCourses(response.data);
    } catch (error) {
      console.error('Error searching courses:', error);
    }
  };

  return (
    <Container fluid className="app-container">
      <CursosPage />
    </Container>
  );
};

export default CursosPage2;
