import React from 'react';
import SpotifyImage from './SpotifyImage';
import './welcome.css';
import alex from './alex.jpg';





function App() {
  return (
    <>
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
    
    <SpotifyImage />
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
