import './styles/PreviousProjects.css';

function PreviousProjects() {
  return (
    <div className="previous-projects">
      <h2>Previous Fundraisers</h2>
      <main className="previous-projects-main">
        <section className="previous-projects-section">
          <h4>Money for Low-Income Students</h4>
          <p><strong>Goal for Low-Income Students:</strong> $500</p>
          <p><strong>Money Received:</strong> $500</p>
          <p>
            The money collected from the fundraiser will be used to support a young girl named Yanzi, a 9-year-old student currently in 4th grade. A disaster struck in her hometown in 2021, flooding and destroying her home. She has a large family and due to her mother's illness, she is unable to afford the education. 3000 yuan ($500) will be used to support one year of her education.
          </p>
          <h5>Donations Received:</h5>
          <ul>
            <li>03/02/2022: $90 + $10</li>
            <li>03/04/2022: $20</li>
            <li>03/05/2022: $18</li>
            <li>03/06/2022: $20</li>
            <li>03/16/2022: $8</li>
            <li>03/13/2022: $43</li>
            <li>03/20/2022: $44</li>
            <li>03/29/2022: $60</li>
            <li>03/29/2022: $95</li>
            <li>03/30/2022: $8</li>
            <li>04/01/2022: $5</li>
            <li>04/04/2022: $60</li>
            <li>04/22/2022: $19</li>
          </ul>
          <div className="goal-complete-box">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="goal-text">Goal Completed!</div>
          </div>
        </section>

        <section className="previous-projects-section">
          <h4>Support for Ukraine</h4>
          <p><strong>Goal for Ukraine:</strong> $500</p>
          <p><strong>Money Received:</strong> $899</p>
          <p>
            With all of the support we have already received, we have decided to further branch out to support the refugees of Ukraine.
            Pastor George Pordea originally established Camp Hope in Romania to minister summer camps. But now the camp is being used as a place for Ukrainians to rest on their escape from the war or to stay if they have nowhere else to go. Donations of money are being collected to purchase food, bedding, and everything these people need.
            Here is their <a href="https://www.facebook.com/Internationalaccesstomissions/">Facebook Page Link </a>
            And a link to their <a href="https://www.ia2m.org/?fbclid=IwAR3iYZSsL0P2FyD7JopDG_VuBbNK5obHuWz1xAWqMgJ28CeWil1Vw2UtCNw">Donation Website Link </a> where you can make donations!
            Our goal is to raise at least $500 for the refugees of Ukraine.
          </p>
          <h5>Donations Received:</h5>
          <ul>
            <li>04/22/2022: $7</li>
            <li>05/08/2022: $32</li>
            <li>05/21/2022: $515</li>
            <li>06/08/2022: $12</li>
            <li>06/08/2022: $10</li>
            <li>06/08/2022: $15</li>
            <li>06/13/2022: $20</li>
            <li>07/22/2022: $40</li>
            <li>08/04/2022: $31</li>
            <li>08/13/2022: $178</li>
          </ul>
          <div className="goal-complete-box">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="goal-text">Goal Completed!</div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PreviousProjects;
