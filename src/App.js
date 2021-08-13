import React from 'react';
import SpotifyImage from './SpotifyImage';
import './welcome.css';
import alex from './alex_new.jpg';
import {useSpring, animated} from 'react-spring';
import f_alex from './f_alex.jpg';
import b_alex from './blue_alex.jpg';
import anteater from './BCeater-left.png';
import lakers from './lakers.png';
import resume from './Alex_Kumar_resume.pdf'





function App() {
  const first_fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 200, config: {duration: 1000}});
  const fade_in = useSpring({opacity: 1, from: {opacity: 0}, delay: 3500});
  const second_fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 1200, config: {duration: 1000}});
  const third_fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 2200, config: {duration: 1000}});
  return (
    <>
    
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="/" id="white-text">Alex Kumar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" id="white-text">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#about-me" id="white-text">About Me </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#listening" id="white-text">I'm Listening to...</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href={resume} id="white-text">My resume</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="#contact" id="white-text">Other info</a>
          </li>
          
          
        </ul>
        
      </div>
    </nav>
    

    <div class="jumbotron">
      <animated.div style={first_fade}>
      <h1 class="display-4 mt-5" id="white-text">Hey, I'm Alex!</h1>
      </animated.div>

      <animated.div style={second_fade}>
      
      <p class="enter" id="white-text">Take a look around my website to learn a little more about me!</p>
      </animated.div> 

      
    </div>

    <animated.div style={third_fade}>  
    <div class="container-fluid bg-transparent mb-5">
            
            <div class="row image_hold">
                <div class="col-sm mx-auto">
                  <img src={b_alex} class="alex_image rounded"></img>
                </div>

                <div class="col-sm mx-auto">
                  <img src={alex} class="alex_image rounded"></img>
                </div>

                <div class="col-sm mx-auto">
                  <img src={f_alex} class="alex_image rounded"></img>
                </div>
            </div>
        </div>
      </animated.div>

    


    <h1 class="about" id="white-text">A little bit about me...</h1>
    
    <div class="container bg-transparent uci-part">
        <div class="row">
        <div class="col-sm">
        <p class="about-detail" id="white-text">I graduated from the University of California, Irvine with a Bachelor's in Computer Science, and am currently working at Walmart as a full time Software Engineer!</p>
        </div>
        <div class="col-sm make_c">
          <img src={anteater} class='anteater'></img>
        </div>

        </div>
    </div>
    
    

    <div class="container bg-transparent ball">
      <div class="row">
        <div class="col-sm">
          <p class="about-detail" id="white-text">I really love basketball. I'm a diehard Lakers fan and Kobe Bryant is my most favorite player of all time.</p>
          
          
        </div>
        <div class="col-sm make_c">
            <img src={lakers} class='anteater'></img>
        </div>
      </div>
    </div>
    

   
    
    
    
    <SpotifyImage />
    
    
    
    
    
    <div className="darken mt-5 pt-5">

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
