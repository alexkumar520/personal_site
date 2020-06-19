import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import './myStyles.css';


export default class SpotifyImage extends React.Component {
    state = {
        
        image : [],
        title : "",
        artists : [],
        link : ""
    }

    componentDidMount(){
        console.log(process.env.REACT_APP_CLIENT_ID);
        console.log(process.env.REACT_APP_CLIENT_SECRET);
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
            refresh_token: 'AQBSirSXlEjwHePfS1LRQX2UYf__arNBfw60blP1foUgDFXrG1tiONZPxJHzZ5F0dC8elGDq2aRg49zRajZx3rHWnv0Eeij1jukXFfdtAdwh209ZAeNKUCLORUnPn5gJ1to'
          };
        

        axios.post('https://accounts.spotify.com/api/token',
        queryString.stringify(data),
        headers
        ).then(res => {
            
            console.log("getting access");
            
            
            axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    'Authorization': 'Bearer ' + res.data.access_token
                   }}
                ).then(response => {
                    console.log(response);
                    console.log(response.status);
                    console.log(typeof(response.status));
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

                    console.log(this.state.image);
                    console.log("the title is: " + this.state.title);
                    console.log(this.state.artists);
                    console.log(this.state.link);

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
    console.log(artists);

     
    
    if ((this.state.title) != ""){
    return (
        <>
        
        
        <div className="gradient-border"id="box">
            <img src={this.state.image[0].url}className="image"></img>
            <a className="right"href={this.state.link}>{this.state.title}<br></br>by {artists}</a>
        </div>
        </>
    )
            }
    else{
        return(
            <div className="gradient-border"id="box">
                <p className="right">Surprisingly, I'm not listening to anything right now... <br></br> Try again later!</p>
            </div>
        )
    }
}
}