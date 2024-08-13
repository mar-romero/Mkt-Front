import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';
import styles from './CarouselCard.module.scss';
import stylesCustom from '../../../../custom.module.scss';
import { Link } from 'react-router-dom';
import Rectangle55 from '../../../../public/images/Rectangle2.jpg';

interface CarouselCardProps {
  cards: { title: string; content: string }[]; // Array de tarjetas
}


const CarouselCard: React.FC<CarouselCardProps> = ({ cards }) => {
  // Función para dividir un array en grupos
  const chunk = (arr: any[], size: number) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));

  // Divide las tarjetas en grupos de tres
  const cardGroups = chunk(cards, 3);

  return (
    <section className={styles.CarouselCard}>
      <div className={styles.carousel}>
        <Carousel interval={null}>
          {cardGroups.map((group, groupIndex) => (
            <Carousel.Item key={groupIndex}>
              <div className="row">
                {group.map((card, cardIndex) => (
                  <div className="col-md-3 mb-3" key={cardIndex}>
                    <Card className={styles.carouselIn}>
                      <Card.Body>
                        <Card.Img src={Rectangle55} className={styles.carouselItem} />
                        <Card.Text className={styles.carouselTextIn}>{card.content}</Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <Link to="/cursos" style={{ textDecoration: 'none' }}>
          <Button variant="primary" className={`${stylesCustom.btnHome} ${stylesCustom.btnHomeCerti}`}>
            Ver todos los cursos
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CarouselCard;
