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
        link : ""
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
            
            //console.log("getting access");
            
            
            axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    'Authorization': 'Bearer ' + res.data.access_token
                   }}
                ).then(response => {
                    //console.log(response.data);
                    //console.log(response.status);
                    //console.log(typeof(response.status));
                    if ((response.status) != 200 ){
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

                    //console.log(this.state.image);
                    console.log("the title is: " + this.state.title);
                    //console.log(this.state.artists);
                    //console.log(this.state.link);

                }).catch(err => console.log(err))
            
            axios.get('https://api.spotify.com/v1/me/player/recently-played', {
                headers: {
                    'Authorization': 'Bearer ' + res.data.access_token
                }, params : {
                    limit: "10"
                }
                
            }).then(finalres => {
                
                //console.log(finalres);
            }).catch(newerror => {
                console.log(newerror);
            })
            

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
    

    if ((this.state.title) != ""){
    return (
        <>
        <div class="container bg-transparent">
            
            <div class="row">
                <div class="col-sm">

                </div>
                <div class="col-sm-6 text-center gradient-border" id="box">
                    
                    <img src={this.state.image[1].url} class="center-block mt-4 mb-4 resize_fit_center_interest" id="image"></img>
                    <br></br>
                        <DarkToolTip title={
                            <>
                                <div className="hold">
                                
                                    <img className="spotify-img" src={spotify}></img>
                                
                                <p> Check this song out on Spotify!</p>
                                </div>
                            </>
                        } arrow>
                            <div>
                                
                                <a className="right mt-3" href={this.state.link}>{this.state.title}<br></br>by {artists}</a>
                            </div>
                        </DarkToolTip>
                    <br></br>
                    
                </div>
                <div class="col-sm">
                    
                </div>
                
            </div>
        </div>
        
        
        
        </>
    )
            }
    else{ //this is for when currently-playing essentially returns nothing cause im either not live or on phone
        return(
            <div className="gradient-border"id="box">
                <p className="right">Surprisingly, I'm not listening to anything right now... <br></br> Try again later!</p>
            </div>
        )
    }
}
}