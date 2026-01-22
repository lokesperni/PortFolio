import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Section from "./Section";
import Footer from "./Footer";
import "./App.css"

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Section id="about" title="Career Objective">
          Motivated and self-learning <b>MERN Full Stack Developer</b> with hands-on experience in
          building responsive frontend and backend web applications. Passionate about learning new
          technologies, solving problems, and growing in a collaborative environment.
        </Section>

        <Section id="education" title="Education">
          <p>
            <b>Bachelor of Science (B.Sc) – MPC</b><br />
            Samhitha Degree College | 2019 – 2022<br />
            Course ongoing with a few pending backlogs.<br />
            Focused on enhancing technical and practical skills through project-based learning.
          </p>
        </Section>

        <Section id="skills" title="Technical Skills">
          <ul>
            <li><b>Frontend:</b> HTML, CSS, JavaScript, React.js</li>
            <li><b>Backend:</b> Node.js, Express.js</li>
            <li><b>Database:</b> MongoDB, RESTful APIs</li>
            <li><b>Version Control:</b> Git, GitHub</li>
            <li><b>Other Tools:</b> Postman, VS Code</li>
          </ul>
        </Section>

        <Section id="projects" title="Projects">
  <div className="card-container">
    <div className="card">
      <h3>Weather App</h3>
      <p>Real-time weather data using OpenWeather API.</p>
      <div>
        <a href="https://github.com/lokesperni/Weather" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://weather-app-openclimate.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>

    <div className="card">
      <h3>Food Store</h3>
      <p>Responsive online food ordering UI with filtering and search.</p>
      <div>
        <a href="https://github.com/lokesperni/foodstore" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://foodstore-app.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>

    <div className="card">
      <h3>Programiz</h3>
      <p>Educational app to practice programming problems.</p>
      <div>
        <a href="https://github.com/lokesperni/programiz1.js" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://programiz-app.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>

    <div className="card">
      <h3>E-Commerce App</h3>
      <p>Online store using FakeStore API with cart & filters.</p>
      <div>
        <a href="https://github.com/lokesperni/Shopping1.js" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://ecommerce-products-app.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a>
      </div>
    </div>

    <div className="card">
      <h3>CRUD Operations</h3>
      <p>Node.js + MongoDB app with Create, Read, Update, Delete.</p>
      <div>
        <a href="https://github.com/lokesperni/REST" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://rest-4nf2.onrender.com" target="_blank" rel="noreferrer">Render Demo</a>
      </div>
    </div>

    <div className="card">
      <h3>Authentication System</h3>
      <p>JWT-based login and registration system.</p>
      <div>
        <a href="https://github.com/lokesperni/REGISTER-LOGIN" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </div>
</Section>

        <Section id="certifications" title="Certifications">
          <p><b>MERN Full Stack Development Training</b> – Godavariwave Technologies</p>
        </Section>

        <Section id="strengths" title="Strengths">
          <ul>
            <li>Quick Learner and Problem Solver</li>
            <li>Good Understanding of Full Stack Workflow</li>
            <li>Passionate about Web Development and Continuous Learning</li>
          </ul>
        </Section>

        <Section id="contact" title="Contact">
          <p>📧 Email: <a href="mailto:lokeslokeswarao@gmail.com">lokeslokeswarao@gmail.com</a></p>
          <p>🤳 Phone No: 7981879093,9502156736</p>
          <p>🔗 LinkedIn: <a href="https://linkedin.com/in/perni-lokeswarrao" target="_blank" rel="noreferrer">linkedin.com/in/perni-lokeswarrao</a></p>
          <p>📍 Location: RJY A.P India</p>
          <div className="signature">
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App; 
