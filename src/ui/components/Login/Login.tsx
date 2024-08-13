import React, { useState } from 'react';
import styles from '../../../custom.module.scss';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');

    window.location.href = `http://localhost:3000/cursos`;
  };

  return (
    <div className={`${styles.centralDivLogin}`}>
      <div className={styles.registrationForm}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Email*
            </label>
            <input
              type="text"
              className={styles.formControl}
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña*
            </label>
            <div style={{ display: 'flex', alignItems: 'stretch' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.formControl}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" className={styles.showHideButton} onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </button>
            </div>
          </div>
          <button type="submit" className={styles.btn}>
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
