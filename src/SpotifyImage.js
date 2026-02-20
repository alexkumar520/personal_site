import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import './myStyles.css';
import ToolTip from '@material-ui/core/Tooltip';
//import alex from './alex.jpg' implement when adding everything else. 
import spotify from './Spotify_Icon_RGB_Green.png';
import { withStyles } from '@material-ui/core/styles';

const DarkToolTip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.black,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      textAlign: 'center',
      fontSize: '15px',
      maxWidth: '400px',
      justifyContent: 'center',
      alignContent: 'center'
    },
    arrow: {
        color: theme.palette.common.black
    }
  }))(ToolTip);

 




export default class SpotifyImage extends React.Component {
    
    
    state = {
        
        image : [],
        title : "",
        artists : [],
        link : "",
        videoId: ""
    }
    

    

    componentDidMount(){
        
        const headers = {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              username: process.env.REACT_APP_CLIENT_ID,
              password: process.env.REACT_APP_CLIENT_SECRET,
            },
          };

          const data = {
            grant_type: 'refresh_token',
            refresh_token: process.env.REACT_APP_REFRESH_TOKEN
          };
        

        axios.post('https://accounts.spotify.com/api/token',
        queryString.stringify(data),
        headers
        ).then(res => {
            
           
            
            
            axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    'Authorization': 'Bearer ' + res.data.access_token
                   }}
                ).then(response => {
                    //console.log(response.data);
                    //console.log(response.status);
                    //console.log(typeof(response.status));
                    if ((response.status) !== 200 ){
                        console.log("Not playing anything");
                    }
                    else{
                    this.setState({
                        image: response.data.item.album.images,
                        title: response.data.item.name,
                        artists: response.data.item.artists,
                        link: response.data.item.external_urls.spotify
                    });
                    
                    
                }

                    

                }).catch(err => console.log(err))
            
            

            
            

        })
        .catch(err => console.log(err))
        
        

    
    }

    

render(){
    
    
    var int;
    var artists = "";
    for (int = 0; int < this.state.artists.length; int++){
        artists += this.state.artists[int].name + ", "
    }
    artists = artists.substring(0, artists.length-2);
    

    if ((this.state.title) !== ""){
    return (
        <>

        
        
        

        <div class="container bg-transparent mt-5 mb-5 spotify-display" id="listening">
            
            <div class="row">
                <div class="col-sm-5 detail" id="white">
                    If you catch me in person I'll most likely have my earphones on and be listening to music. I don't really have a music taste in particular; whatever song gives me goosebumps, I'll be jamming out to it. On the right is the current song I'm listening to using Spotify! Hover over the title to check out the song! *if I'm actually listening*
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-4 text-center gradient-border fade-in" id="box">
                    
                    <img src={this.state.image[1].url} class="center-block mt-4 mb-4 resize_fit_center_interest" id="image" alt="Album cover"></img>
                    <br></br>
                        <DarkToolTip title={
                            <>
                                <div className="hold">
                                
                                    <img className="spotify-img mt-1" src={spotify} alt="Spotify"></img>
                                
                                <p class="mt-3 tooltext"> Check this song out on Spotify!</p>
                                </div>
                            </>
                        } arrow>
                            <div>
                                
                                <a className="right" href={this.state.link}>{this.state.title}<br></br>by {artists}</a>
                            </div>
                        </DarkToolTip>
                    <br></br>
                    
                </div>
                
                
            </div>
        </div>
        
        
        

        
        
        
        
        </>
    )
            }
    else{ //this is for when currently-playing essentially returns nothing cause im either not live or on phone
        return(
            <div class="container bg-transparent mt-5 mb-5 spotify-display" id="listening">
            
            <div class="row">
                <div class="col-sm-5 detail" id="white">
                    If you catch me in person I'll most likely have my earphones on and be listening to music. I don't really have a music taste in particular; whatever song gives me goosebumps, I'll be jamming out to it. On the right is the current song I'm listening to using Spotify! Hover over the title to check out the song! *if I'm actually listening*
                </div>
                <div class="col-sm-1"></div>
                <div class="col-sm-4 text-center gradient-border fade-in" id="box">
                    
                    <p class="detail">Unfortunately, you managed to check my website when I'm not listening to anything... <br></br> Maybe try again later!</p>
                    
                </div>
                
                
            </div>
        </div>
        )
    }
}
}