import Background from './Background';
import './styles/App.css';
import Carousel from './Carousel';
import { motion } from 'motion/react';
import axios from "axios";
import FacebookFeed from './FacebookFeed';  

import cretLogo from '/backgroundImages/CRETLogoTransparent.png';

const apiKey = "f73252-a216cf-a5022c-36c2bd-a05edb";
axios.defaults.headers.common['x-api-key'] = apiKey;

function App() {
  return (
    <>
      <header>
        <section className="image-gallery">
          <Background />
          <div className="header-content">
            <motion.div
              className="logo-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              <img src={cretLogo} alt="CRET Logo" className="cret-logo" />
            </motion.div>

            <motion.h1
              className="page-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3 }}
            >
              St. Louis Crises Response Teens
            </motion.h1>
          </div>
          <div className="fade-out-overlay"></div>
        </section>
      </header>

      <main>
        <section className="about-section">
          <h2>Who is CRET?</h2>
          <p className="about-text">
            St. Louis Crises Response Teens (CReT) is a non-profit charity organization founded by teenagers in St. Louis during the 2020 pandemic, working to raise money, donate materials to local facilities, and volunteer to support the community through difficult times.
            Handmade crochet products and crafts will be sold for a fundraiser (learn more on the Why? page) to support students who cannot afford education; payment accepted through cash, PayPal, Zelle, or Venmo.
            Note: Children's Hope International (CHI) is a 501c3 non-profit organization; CReT has an agreement with CHI, so any money donated to CHI with a note listing it as a donation to CReT will also belong to CReT! Please feel free to donate to CHI (tax-ID: 43-1672909, account #: 355007052997)
          </p>
          <FacebookFeed />
          <h2>Meet our Members</h2>
          <div className="members-grid">
            <div className="member-column">
              <ul>
                <li>Maggie Tang - Co President</li>
                <li>Ali Zhang - Co President</li>
                <li>Amanda Moi</li>
                <li>Selina Guo</li>
                <li>Michelle Chen</li>
                <li>YangFan Liu</li>
                <li>Isabella Wang</li>
                <li>Sarah Mu</li>
                <li>Jessica Zhang</li>
                <li>Kelly Zhang</li>
              </ul>
              <div className="column-footer">Current Members</div>
            </div>

            <div className="member-column">
              <ul>
                <li>Angela Lee (2024)</li>
                <li>Cindy Yao (2024)</li>
                <li>Joshua Li (2024)</li>
                <li>Megan Liu (2024)</li>
                <li>Sylvia Dumonceaux (2024)</li>
                <li>Emma Shao (2023)</li>
                <li>Nicole Dai (2023)</li>
                <li>Erica Chen (2023)</li>
                <li>Roselyn Chen (2023)</li>
                <li>Jennifer Li (2022)</li>
                <li>Danielle Zhang (2022)</li>
                <li>Teresa Jiang (2022)</li>
                <li>Sara Ning (2022)</li>
                <li>Emily He (2021)</li>
                <li>Lian Lee (2021)</li>
              </ul>
              <div className="column-footer">Graduated Members</div>
            </div>
          </div>
        </section>

        <section className="main-content">
          <p className="subtitle">We could not do this without our amazing partners!</p>
          <Carousel />
        </section>
      </main>
    </>
  );
}

export default App;