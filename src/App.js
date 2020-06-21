import React from 'react';
import SpotifyImage from './SpotifyImage'
import './welcome.css';
import alex from './alex.jpg';
import {Link} from 'react-scroll';


function App() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-custom ">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link">Left Link 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link">Left Link 2</a>
    </li>
  </ul>
  <ul class="navbar-nav ml-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#box">About Me</a>
    </li>
      <a class="nav-link" href="#">Contact Me</a>
    
  </ul>
</nav>
    <div className="welcome">
      <a className="banner-text"> Hi, I'm Alex Kumar! </a>
      <br></br>
      <img src={alex}className="format"></img>
      <br></br>
      <p className="new-text">I'm a student at the University of California, Irvine (UCI) studying computer science!<br></br><br></br> When I'm working or pretty much doing anything I almost always listen to music! <br></br><br></br> I also love basketball, video games, and eating good food! <br></br><br></br> Check out my social media!</p>
      <a className="new-text"> Insert links/images here</a>
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
    <br></br><br></br>
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
    <a className ="listening"> Here's what I'm listening to right now...</a>
    </div>
    <SpotifyImage />
    
    
    </>
  )
}

export default App;
