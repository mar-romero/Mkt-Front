import axios from 'axios';
import { Course } from '../domain/Course/Course';
import { CourseCategory } from '../domain/Course/CourseCategory';


const API_URL = 'http://localhost:3001'; // URL del backend local

export const fetchCourses = async (query: string): Promise<Course[]> => {
  const response = await axios.get(`${API_URL}/courses`, {
    params: { query }
  });
  return response.data;
};

export const fetchCategories = async (): Promise<CourseCategory[]> => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};
