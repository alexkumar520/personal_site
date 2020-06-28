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
                    //console.log(this.state.artists);
                    //console.log(response.data.item.artists);
                    var newint;
                    var queryartists = "";
                    for (newint = 0; newint < response.data.item.artists.length; newint++){
                        console.log("local test" + response.data.item.artists[newint]);
                        queryartists += response.data.item.artists[newint].name + ", ";
                    }
                    queryartists = queryartists.substring(0, queryartists.length-2);

                    //console.log(queryartists);


                    axios.get('https://www.googleapis.com/youtube/v3/search',{
                        params:{
                            part: 'snippet',
                            maxResults: 1,
                            key: process.env.REACT_APP_CLIENT_KEY,
                            q: response.data.item.name + " " +  queryartists,
                            
                                
                        }
                    }).then(vidres =>{
                            //console.log(vidres);
                            this.setState({
                                videoId: vidres.data.items[0].id.videoId
                            })
                            //console.log(vidres.data.items[0].id.videoId);
                    }).catch(viderror => {
                        console.log(viderror);
                    })
                    
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
                console.log("youtube playback unavailable!")
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

        <p class="text-center youtube mb-5">
            I'm jamming out to this song using Spotify...
        </p>


        <div class="container bg-transparent mb-5">
            
            <div class="row">
                <div class="col-sm">

                </div>
                <div class="col-sm-6 text-center gradient-border" id="box">
                    
                    <img src={this.state.image[1].url} class="center-block mt-4 mb-4 resize_fit_center_interest" id="image"></img>
                    <br></br>
                        <DarkToolTip title={
                            <>
                                <div className="hold">
                                
                                    <img className="spotify-img mt-1" src={spotify}></img>
                                
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
                <div class="col-sm">
                    
                </div>
                
            </div>
        </div>
        
        <p class="text-center youtube">Check out what I'm listening to on YouTube if you'd like as well!</p>
                        
        <div
                class="container mt-5"
                style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0
                }}
                >
                    <iframe
                        style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "60%"
                        }}
                        src={`https://www.youtube.com/embed/${this.state.videoId}`}
                        frameBorder="0"
                />
        </div>

        

        
        
        
        
        </>
    )
            }
    else{ //this is for when currently-playing essentially returns nothing cause im either not live or on phone
        return(
            <div class="container bg-transparent">
            
            <div class="row">
                <div class="col-sm">

                </div>
                <div class="col-sm-6 text-center gradient-border" id="box">
                    <p>Surprisingly I'm not listening to anything right now...<br></br>Try again later!</p>
                </div>    
                    
                <div class="col-sm">
                    
                </div>
                
            </div>
        </div>
        )
    }
}
}