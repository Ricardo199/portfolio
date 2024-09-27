/**
 * About.js
 * 
 * This component renders the "About Me" page for the portfolio site.
 * It includes a brief introduction, background information, and a link to the CV.
 * 
 * Author: Ricardo Antonio Burgos Avelar
 * Date: [Insert Date]
 */

import '../App.css';
import Container from 'react-bootstrap/esm/Container';
import image from '../Untitled.png';

function About() {
    return (
        <>
            <div className="App bg-dark text-light">
                <header className="App-header">
                    <Container>
                        <h1 className="text-center">About Me</h1>
                        {/* Profile Image */}
                        <img 
                            src={image} 
                            alt="Ricardo Burgos" 
                            className="d-block mx-auto my-4" 
                            style={{ width: '150px', borderRadius: '50%' }} 
                        />
                        {/* Introduction Paragraph */}
                        <p>Hello! My name is Ricardo Antonio Burgos Avelar. I am a passionate web developer with a deep love for programming.
                            I hold an Associate's degree in Systems and am currently pursuing a degree in Software Engineering Technology at Centennial College.
                            Originally from Latin America, I bring a diverse perspective and a strong work ethic to everything I do.</p>
                        {/* Learning and Skills Paragraph */}
                        <p>I am always eager to learn new technologies and continuously improve my skills.
                            My journey in web development has been driven by a relentless curiosity and a desire to create
                            dynamic and responsive websites that provide excellent user experiences.
                            I am committed to going the extra mile in all my projects, ensuring that every detail is meticulously crafted and every
                            challenge is met with innovative solutions.</p>
                        {/* Teamwork and Collaboration Paragraph */}
                        <p>In addition to my technical skills, I am a team player who values collaboration and communication.
                            I believe that the best results come from working together and sharing knowledge.
                            I am excited about the opportunity to contribute to a forward-thinking
                            team and to grow both personally and professionally in the field of web development.</p>
                        {/* Academic Background Paragraph */}
                        <p>Throughout my academic journey, I have gained a solid foundation in various programming languages and frameworks,
                            including but not limited to JavaScript, React, and Node.js.
                            My projects have ranged from simple static websites to complex web applications,
                            each one honing my skills and expanding my understanding of web development principles.</p>
                        {/* Achievements Paragraph */}
                        <p>One of my proudest achievements was developing a fully functional e-commerce website as part of a team project for college,
                            and also editing the web a pitch web page for the Salesian library.
                            This experience taught me the importance of version control, agile methodologies, and effective communication within a team.
                            It also reinforced my belief in the power of collaboration and the value of diverse perspectives in achieving common goals.</p>
                        {/* Personal Interests Paragraph */}
                        <p>Outside of my academic and professional pursuits, I enjoy exploring new technologies and staying up-to-date with industry trends.
                            I am an avid reader of tech vlogs and passionately follow coders exploits on youtube.
                            My passion for programming extends beyond the classroom and the workplace, driving me to constantly seek out new challenges and opportunities for growth.</p>
                        {/* Summary Paragraph */}
                        <p>In summary, I am a dedicated and enthusiastic web developer with a strong educational background and a commitment to continuous learning.
                            I am excited about the future of web development and look forward to contributing my skills and passion to a dynamic and innovative team.
                            Thank you for taking the time to learn more about me, and I hope to have the opportunity to discuss how I can contribute to your organization.</p>
                        {/* CV Button */}
                        <button 
                            className="btn btn-primary m-3" 
                            onClick={() => window.open('https://drive.google.com/file/d/1Z9aJsbmif0kqwzmMtdhU1XPQxBgIQSXR/view?usp=sharing', '_blank')}
                        >
                            My CV
                        </button>
                        <br />
                    </Container>
                </header>
            </div>
        </>
    );
}

export default About;