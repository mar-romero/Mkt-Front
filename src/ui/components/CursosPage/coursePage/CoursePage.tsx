import React, { useState, useEffect } from 'react';
import {  Row, Col } from 'react-bootstrap';
import axios from 'axios';
import SearchBar from '../searchBar/SearchBar';
import SideMenu from '../sideMenu/SideMenu';
import CourseGrid from '../courseGrid/CourseGrid';
import styles from './CoursePage.module.scss';
import Rectangle55 from '../../../../public/images/Rectangle10.png';

const la = [
  {
    title: 'Introduction to Programming',
    instructor: 'Aprende los conceptos básicos de programación desde cero.',
    classesCount: 10,
    imageUrl: Rectangle55,
    courseUrl: '/PaginaCurso'
  },
  {
    title: 'Advanced JavaScript',
    instructor: 'Domina conceptos y técnicas avanzadas de JavaScript.',
    classesCount: 15,
    imageUrl: Rectangle55,
    courseUrl: '/PaginaCurso'
  },
  {
    title: 'Data Structures and Algorithms',
    instructor: 'Comprende e implementa estructuras de datos y algoritmos.',
    classesCount: 20,
    imageUrl: Rectangle55,
    courseUrl: '/PaginaCurso'
  }
];

const CursosPage: React.FC = () => {
  const [courses, setCourses] = useState(la);

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
    <Row className={styles.divCentral}>
      <Col md={3}>
        <SideMenu />
      </Col>
      <Col md={9}>
        <SearchBar onSearch={handleSearch} />
        <CourseGrid courses={courses} />
      </Col>
    </Row>
  );
};

export default CursosPage;
