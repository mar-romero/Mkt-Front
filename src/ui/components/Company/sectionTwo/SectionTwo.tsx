import React, { useState } from 'react';
import styles from './SectionTwo.module.scss';


const SectionTwo: React.FC = () => {
  const [formValues, setFormValues] = useState({
    company: '',
    phone: '',
    email: '',
    query: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aquí puedes enviar los datos a tu servidor
    // Por ejemplo, puedes hacer una solicitud POST a tu API
    const response = await fetch('https://tu-api.com/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className={styles.sectionContainer}>
      <p className={styles.subTitle}>
        Invertí en el crecimiento de tu empresa con MKT eLearning, donde cada curso es un paso adelante hacia la
        excelencia empresarial.
      </p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className={styles.formControl}
            id="company"
            placeholder="Empresa:"
            value={formValues.company}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className={styles.formControl}
            id="phone"
            placeholder="Teléfono:"
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className={styles.formControl}
            id="email"
            placeholder="Correo electrónico:"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <textarea
            className={styles.formQuery}
            id="query"
            placeholder="Consulta:"
            value={formValues.query}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className={`btn ${styles.submitButton}`}>
          Enviar Consulta
        </button>
      </form>
    </div>
  );
};

export default SectionTwo;
