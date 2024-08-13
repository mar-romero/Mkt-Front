import React from 'react';
import styles from '../../../custom.module.scss'; // Importa el archivo SCSS personalizado
import pin from '../../../public/images/pin.png';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container p-4">
        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
          <p className="text-uppercase">
            <img src={pin} alt="Pin" style={{ marginRight: '10px', width:'20px' }} />
            Dirección: Av. Mitre 2069 - Avellaneda - Buenos Aires 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
