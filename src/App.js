import React from 'react';
import SpotifyImage from './SpotifyImage';
import './welcome.css';
import alex from './alex.jpg';
import {useSpring, animated} from 'react-spring';




function App() {
  const first_fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 200, config: {duration: 1000}});
  const fade_in = useSpring({opacity: 1, from: {opacity: 0}, delay: 2000});
  const second_fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 1200, config: {duration: 500}});
  return (
    <>
    <animated.div style={fade_in}>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
      <a class="navbar-brand" href="/" id="white-text">Alex Kumar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" id="white-text">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#box" id="white-text">About Me </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact" id="white-text">Other info</a>
          </li>
          
        </ul>
        
      </div>
    </nav>
    </animated.div>

    <div class="jumbotron">
      <animated.div style={first_fade}>
      <h1 class="display-4">Hey I'm Alex!</h1>
      </animated.div>

      <animated.div style={second_fade}>
      <hr class="my-4"/>
      <p>Welcome to my website!</p>
      </animated.div>
    </div>


    <br></br>
    <br></br>
    
    
    <animated.div style={fade_in}>
    <SpotifyImage />
    </animated.div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    

    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="darken">

      <div class="container-fluid bg-dark" id="contact">
        <p class="text-center" id="contact-banner">Check out my social media!</p>
        <div class="row">
          <div class="container bg-dark">
            <div class="row">
              <div class="col-sm text-center mb-3" id="white-text">
              <a href="https://www.linkedin.com/in/alexkumar520/" className="social"><i class="fa fa-linkedin-square" aria-hidden="true" id="contact-icon"></i></a>
              
              </div>
              <div class="col-sm text-center mb-3" id="white-text">
                <a href="https://github.com/alexkumar520" className="social"><i class="fa fa-github" aria-hidden="true" id="contact-icon"></i></a>
                
              </div>
              <div class="col-sm text-center mb-3" id="white-text">
                <a href="https://www.facebook.com/profile.php?id=100003521468126" className="social"><i class="fa fa-facebook-square" aria-hidden="true" id="contact-icon"></i></a>
              </div>
              <div class="col-sm text-center mb-3" id="white-text">
                <a href="https://www.instagram.com/kumaralex_/?hl=en" className="social"><i class="fa fa-instagram" aria-hidden="true" id="contact-icon"></i></a>
              </div>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </div>
    
    
    </>
  )
}

export default App;
