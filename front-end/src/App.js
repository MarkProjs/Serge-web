import {useEffect, useState} from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';

function App() {
  useEffect(() => {
    document.title = "Pro Alliance Logistics | Home"
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:spoppe@pccnlog.com?subject=Message from
    ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: %20${formData.message}`;

    setTimeout(() => {
      window.alert("The email has been prepared! ✅ Please check your mail app.");
    }, 1000);
  }

  function changeTitle(e) {
    document.title = `Pro Alliance Logistics | ${e.target.innerText}`
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <div className="App">
      <nav className="navbar">
        <img src="/images/logo.jpeg" alt="Pro Alliance" className="logo" />
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div className={menuOpen ? 'smallScreen' : 'nav-links'}>
          <Link to="home" smooth={true} duration={500} offset={-50} onClick={changeTitle}>Home</Link>
          <Link to="about" smooth={true} duration={500} offset={-50} onClick={changeTitle}>About Us</Link>
          <Link to="fleet" smooth={true} duration={500} offset={-50} onClick={changeTitle}> Our Fleet</Link>
          <Link to="contact" smooth={true} duration={500} offset={-50} onClick={changeTitle}>Contact</Link>
        </div>
      </nav>

      {/* home */}
      <section id="home" className="home">
        <div className="home-container">
          <h1>Pro Alliance Logistics</h1>
          <p id="slogan">Providing you with the best service without any worry of your package!<br/>
          Let us worry about your delivery!</p>
        </div>
        <button onClick={() => scroll.scrollToBottom()}>Contact Us</button>
      </section>

      {/* about */}
      <section id="about" className="about">
        <h2>ABOUT US</h2>
        <p id="about-p">Pro Alliance Logistics specializes in courier delivery services, 
        we offer deliver services to Amazon Logistics through the Delivery Service Partner program but are always looking for new clients.</p>
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
      </section>

      {/* core values */}
      <section className="about-values">
        <img src="/images/values.jpg" alt="Values" />
        <blockquote className="values">
          <h3>Our Core Values</h3>
          <br/>
          <p><b>Client service:</b> Client satisfaction is the measure of our success. We value  the trust clients place in our company when they choose our service,
          and we are committed to listen, adapt to client's needs, and provide quality service.</p>
          <br/>
          <p><b>Employees:</b> We consider our employees to  be  the pillars  of our company. We are committed to  provide a  safe environment fostering collaboration,
          innovation, excellence and personal development.</p>
          <br/>
          <p><b>Security:</b> We are committed to continuously enhance the safety and security for the goods we deliver and for the employees delivering them.</p>
        </blockquote>
      </section>

      {/* fleet */}
      <section id="fleet" className="fleet">
        <h2>OUR FLEET</h2>
        <div className="fleet-container">
          <p>We run a fleet made of cargo vans such as Ford Transit, 
          RAM Promaster 3500 and Mercedes Sprinter with a cargo capacity ranging from 370 to 440 cubic feet.</p> <br/>
          <p>Pro Alliance is an eco friendly company, our goal is to operate a zero emission fleet by the end of 2026 
          and replace our whole fleet with electric vehicles. </p>
          <img src="/images/truck.jpg" alt="Truck" />
        </div>
        <h2>WHY CHOOSE US</h2>
        <div className="choose-us">
          <div className="satisfaction">
            <ThumbUpOutlinedIcon sx={{ fontSize: 50 }}/>
            <p>Satisfaction Guarantee</p>
          </div>
          <div className="security">
            <LockOutlinedIcon sx={{ fontSize: 50 }}/>
            <p>Safety</p>
          </div>
          <div className="on-time">
            <RestoreOutlinedIcon sx={{ fontSize: 50 }}/>
            <p>On-Time Delivery</p>
          </div>
        </div>
      </section>


      {/* contact */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required/>
          <br/>
          <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required/>
          <br/>
          <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Send</button> 
        </form>
      </section>
      
      {/* footer */}
      <footer className="footer">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Phone: +1 (514) 349-4733</p>
          <p>Email: spoppe@pccnlog.com</p>
        </div>
        <p id="copyright">&copy; 2023 Pro Alliance Logistics. All rights reserved. | Pro Alliance Logistics | Designed by 
        <a href="https://main.d3cyj93qof0l71.amplifyapp.com" target="_blank" rel="noopener noreferrer"> Mark Agluba</a></p>
      </footer>
    </div>
  );
}

export default App;
