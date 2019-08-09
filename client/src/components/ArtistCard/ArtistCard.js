import React from 'react';
import './ArtistCard.css';

function ArtistCard(props) {
    return (
    <div className="card">
        <div className="image">
            <img className="artistImage" src={ props.src } alt={props.name}/>
        </div>
        <div className="container">
            <h4>{ props.name }</h4>
            <button href="/more" className="button" onClick={() => props.handlePageChange("MoreInfo")}>More Info</button>
            {/* <button href="/eventpage" className="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button> */}
        </div>
    </div>
    )
}

export default ArtistCard;