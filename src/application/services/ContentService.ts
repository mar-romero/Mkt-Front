import axios from 'axios';

const API_URL = 'http://localhost:3001/contentSections';

export const getContentSection = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Asumiendo que solo hay un contenido de sección
  } catch (error) {
    console.error('Error fetching content section:', error);
    throw error;
  }
};
