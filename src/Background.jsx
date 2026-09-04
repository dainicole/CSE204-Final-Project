import { useEffect, useState } from 'react';
import './styles/Background.css';

const images = [
  '/CRET-Website/backgroundImages/background1.jpg',
  '/CRET-Website/backgroundImages/background2.jpg',
  '/CRET-Website/backgroundImages/background3.jpg',
  '/CRET-Website/backgroundImages/background4.jpg',
  '/CRET-Website/backgroundImages/background5.jpg',
  '/CRET-Website/backgroundImages/background6.jpg',
  '/CRET-Website/backgroundImages/background7.jpg',
  '/CRET-Website/backgroundImages/background8.jpg',
  '/CRET-Website/backgroundImages/background9.jpg',
  '/CRET-Website/backgroundImages/background10.jpg',
  '/CRET-Website/backgroundImages/background11.jpg',
  '/CRET-Website/backgroundImages/background12.jpg',
  '/CRET-Website/backgroundImages/background13.jpg',
  '/CRET-Website/backgroundImages/background14.jpg',
  '/CRET-Website/backgroundImages/background15.jpg',
];


function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

function Background() {
  const [imageSet, setImageSet] = useState(
    Array.from({ length: 4 }, () => getRandomImage())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setImageSet(prev =>
        prev.map(img => (Math.random() < 0.5 ? getRandomImage() : img))
      );
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="background-grid">
      {imageSet.map((src, idx) => (
        <div key={idx} className={`image-item item-${idx}`}>
          <img src={src} alt={`Background ${idx}`} />
        </div>
      ))}
    </div>
  );
}

export default Background;
