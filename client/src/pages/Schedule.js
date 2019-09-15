import React, { Component } from 'react';
import ScheduleNav from '../components/ScheduleNav';
import ArtistCard from '../components/ArtistCard';
import { Container } from '../components/Grid';
import API from '../utils/API';

class Schedule extends Component {
    state = {
        artists: [],
        events: []
    };

    componentDidMount(){
        this.loadArtists();
    }

    //function to load artists and make call to API
    loadArtists = () => {
        API.getArtists()
        .then(res => {
            this.setState({ artists: res.data})
        })
    }

    render() {
        return (
            <div>
            <ScheduleNav />
            <Container className="under-nav">
            {this.state.artists.map((artists, index) => {
                return(<ArtistCard
                    key={artists.id}
                    id={artists.id}
                    src={artists.artistPicture}
                    name={artists.artistName}
                    spotify={artists.artistSpotify}
                    youtube={artists.artistYoutube}
                    about={artists.artistAbout}
                    event={artists.artistEvent}
                    />)
            })}
            </Container>
            </div>
        );
    }
}

export default Schedule;
