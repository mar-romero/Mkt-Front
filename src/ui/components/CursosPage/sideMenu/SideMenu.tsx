import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import styles from './SideMenu.module.scss';
import { getCategories } from '../../../../adapters/controllers/CourseController';
import { CourseCategory } from '../../../../core/domain/Course/CourseCategory';

const la = [
  {
    id: 1,
    name: 'Programming'
  },
  {
    id: 2,
    name: 'IA'
  },
  {
    id: 3,
    name: 'Marketing'
  }
];

const SideMenu: React.FC = () => {
  const [categories, setCategories] = useState<CourseCategory[]>(la);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };
    fetchCategories();
  }, []);

  return (
    <div className={styles.sideMenu}>
      <ListGroup variant="flush">
        {categories.map((category) => (
          <ListGroup.Item key={category.id} className={styles.sideMenuItem}>
            {category.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default SideMenu;
