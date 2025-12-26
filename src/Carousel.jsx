import { motion } from 'motion/react';
import './styles/Carousel.css';

const partners = [
  'Busy4Hands',
  "Women's Care Connect",
  'Sharity Charity',
  'St. Louis Modern Chinese School',
  'St. Louis Chinese Language School',
];

function Carousel() {
  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
      >
        {[...partners, ...partners].map((partner, idx) => (
          <span className="carousel-item" key={idx}>
            {partner}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
