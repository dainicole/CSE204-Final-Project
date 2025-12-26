import { useEffect, useState } from 'react';
import './styles/Background.css';

const images = [
  '/final-project-dainicole/backgroundImages/background1.jpg',
  '/final-project-dainicole/backgroundImages/background2.jpg',
  '/final-project-dainicole/backgroundImages/background3.jpg',
  '/final-project-dainicole/backgroundImages/background4.jpg',
  '/final-project-dainicole/backgroundImages/background5.jpg',
  '/final-project-dainicole/backgroundImages/background6.jpg',
  '/final-project-dainicole/backgroundImages/background7.jpg',
  '/final-project-dainicole/backgroundImages/background8.jpg',
  '/final-project-dainicole/backgroundImages/background9.jpg',
  '/final-project-dainicole/backgroundImages/background10.jpg',
  '/final-project-dainicole/backgroundImages/background11.jpg',
  '/final-project-dainicole/backgroundImages/background12.jpg',
  '/final-project-dainicole/backgroundImages/background13.jpg',
  '/final-project-dainicole/backgroundImages/background14.jpg',
  '/final-project-dainicole/backgroundImages/background15.jpg',
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
