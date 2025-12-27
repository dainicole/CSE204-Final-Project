import { useEffect, useState } from 'react';
import './styles/Background.css';

const images = [
  '/CSE204-Final-Project/backgroundImages/background1.jpg',
  '/CSE204-Final-Project/backgroundImages/background2.jpg',
  '/CSE204-Final-Project/backgroundImages/background3.jpg',
  '/CSE204-Final-Project/backgroundImages/background4.jpg',
  '/CSE204-Final-Project/backgroundImages/background5.jpg',
  '/CSE204-Final-Project/backgroundImages/background6.jpg',
  '/CSE204-Final-Project/backgroundImages/background7.jpg',
  '/CSE204-Final-Project/backgroundImages/background8.jpg',
  '/CSE204-Final-Project/backgroundImages/background9.jpg',
  '/CSE204-Final-Project/backgroundImages/background10.jpg',
  '/CSE204-Final-Project/backgroundImages/background11.jpg',
  '/CSE204-Final-Project/backgroundImages/background12.jpg',
  '/CSE204-Final-Project/backgroundImages/background13.jpg',
  '/CSE204-Final-Project/backgroundImages/background14.jpg',
  '/CSE204-Final-Project/backgroundImages/background15.jpg',
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
