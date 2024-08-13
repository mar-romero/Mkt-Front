import React, { useState, useEffect } from 'react';
import styles from '../../../custom.module.scss';
import axios from 'axios';

const RegistrationFormComp: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    window.location.href = `http://localhost:3001/user/${email}`;
  };
  return (
    <div className={styles.centralDiv}>
      <div className={styles.registrationForm}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre*
            </label>
            <input type="text" className={styles.formControl} id="nombre" required />
          </div>
          <div className="mb-3">
            <label htmlFor="apellido" className="form-label">
              Apellido
            </label>
            <input type="text" className={styles.formControl} id="apellido" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Mail*
            </label>
            <input
              type="email"
              className={styles.formControl}
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña*
            </label>
            <input type="password" className={styles.formControl} id="password" required />
          </div>
          <div className="mb-3">
            <label htmlFor="repeatPassword" className="form-label">
              Repetir contraseña*
            </label>
            <input type="password" className={styles.formControl} id="repeatPassword" required />
          </div>
          <div className="mb-3">
            <label htmlFor="celular" className="form-label">
              Celular*
            </label>
            <input type="text" className={styles.formControl} id="celular" required />
          </div>
          <button type="submit" className={styles.btn}>
            Crear Usuario
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationFormComp;
