import { Course } from '../../core/domain/Course/Course';
import { CourseCategory } from '../../core/domain/Course/CourseCategory';
import { fetchCourses, fetchCategories } from '../../core/services/CourseService';

export const getCourses = async (query: string): Promise<Course[]> => {
  return await fetchCourses(query);
};

export const getCategories = async (): Promise<CourseCategory[]> => {
  return await fetchCategories();
};
