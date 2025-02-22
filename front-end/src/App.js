import {useEffect} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';


import './App.css';

function App() {
  useEffect(() => {
    document.title = "Pro Alliance Logistics | Home"
  }, []);
  return (
    <div className="App">
      <nav className="navbar">
        <img src="/images/logo.jpeg" alt="Pro Alliance" className="logo" />
        <div className="nav-links">
          <Link to="home" smooth={true} duration={500} offset={-50}>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-50}>About Us</Link>
          <Link to="fleet" smooth={true} duration={500} offset={-50}> Our Fleet</Link>
          <Link to="contact" smooth={true} duration={500} offset={-50}>Contact</Link>
        </div>
      </nav>

      {/* home */}
      <section id="home" className="home">
        <h1>Pro Alliance Logistics</h1>
        <p id="slogan">Providing you with the best service without any worry of your package!</p>
        <p> Let us worry about your delivery!</p>
        <button onClick={() => scroll.scrollToBottom()}>Contact Us</button>
      </section>

      {/* about */}
      <section id="about" className="about">
        <p>Pro Alliance Logistics is an Amazon delivery service partner which is affiliated with Amazon Fulfillment.</p>
        <div className="about-container">
          <div className="about-desc">
            <div className="vision">
              <h3>Our Vision</h3>
              <p>Our vision is to be the company that provides the best service to our customers.</p>
            </div>
            <div className="mission">
              <h3>Our Mission</h3>
              <p>Our mission is to provide clients with reliable and on time delivery services by putting professionalism at the forefront of its "Client-First" approach.</p>
            </div>
          </div>
          <img src="/images/team.jpeg" alt="Team" />
        </div>
        <div className="about-values">
          <img src="/images/values.jpg" alt="Values" />
          <div className="values">
            <h3>Our Core Values</h3>
            <p><b>Client service:</b> Client satisfaction is the measure of our success. We value  the trust clients place in our company when they choose our service,
            and we are committed to listen, adapt to client's needs, and provide quality service.</p>
            <br/>
            <p><b>Employees:</b> We consider our employees to  be  the pillars  of our company. We are committed to  provide a  safe environment fostering collaboration,
            innovation, excellence and personal development.</p>
            <br/>
            <p><b>Security:</b> We are committed to continuously enhance the safety and security for the goods we deliver and for the employees delivering them.</p>
          </div>
        </div>
      </section>
      
      {/* fleet */}
      <section id="fleet" className="fleet">
        <h2>OUR FLEET</h2>
        <div className="fleet-container">
          <div className="fleet-desc">
            <p>As an Amazon Delivery Service Partner, we exclusively use the following type of vehicles.</p>
            <img src="/images/truck.jpg" alt="Truck" />
          </div>
        </div>
        <h2>WHY CHOOSE US</h2>
        <div className="choose-us">
          <div className="satisfaction">
            <ThumbUpOutlinedIcon/>
            <p>Satisfaction Guarantee</p>
          </div>
          <div className="security">
            <LockOutlinedIcon/>
            <p>Security</p>
          </div>
          <div className="on-time">
            <RestoreOutlinedIcon/>
            <p>On-Time Delivery</p>
          </div>
        </div>
      </section>


      {/* contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <br/>
          <input type="email" placeholder="Email" />
          <br/>
          <textarea placeholder="Message"></textarea>
          <br/>
          <button type="submit">Send</button> 
        </form>
      </section>
      
      {/* footer */}
      <footer className="footer">
      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>123 Main Street, Anytown, USA</p>
        <p>Email: 5oRZP@example.com</p>
      </div>
        <p>&copy; 2023 Pro Alliance Logistics. All rights reserved. | Pro Alliance Logistics | Designed by 
        <a href="https://main.d3cyj93qof0l71.amplifyapp.com" target="_blank" rel="noopener noreferrer"> Mark Agluba</a></p>
      </footer>
    </div>
  );
}

export default App;
