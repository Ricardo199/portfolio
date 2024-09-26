/**
 * Home.js
 * 
 * This file contains the Home component for the portfolio site.
 * The Home component displays a welcome message and an introduction
 * to Ricardo Burgos, along with information about his skills and experiences.
 * 
 * Author: Ricardo Burgos
 * Date: September 21, 2024
 */

import React from 'react';

function Home() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio!</h1>
          <p>
            Hi, I'm Ricardo Burgos, an associate system engineer currently studying at Centennial College, in my 3rd semester of the first year.
          </p>
          <p>
            My mission is to leverage technology to solve real-world problems and continuously learn and grow in the field of software engineering.
          </p>
          <p>
            On this website, you will find information about my projects, skills, and experiences. Feel free to explore and learn more about me.
          </p>
          <p>
            I am passionate about coding, and I have experience working with both front-end and back-end development. I have experience with various programming languages and frameworks, and I am always eager to learn new technologies.
          </p>
          <p>
            In addition to my technical skills, I am a strong communicator and team player. I believe in the power of collaboration and enjoy working with others to achieve common goals.
          </p>
          <p>
            Thank you for visiting my portfolio. If you would like to learn more about me or get in touch, please click the button below.
          </p>
          {/* Note: This was programmed on the 21st of September 2024 to a looped version of Freak - Surf Curse */}
        </header>
      </div>
    </>
  );
}

export default Home;