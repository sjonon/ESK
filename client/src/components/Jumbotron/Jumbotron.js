import React from 'react';
import './Jumbotron.css';

function Jumbotron(props) {
    return (
        <div classNameName="jumbotron">
            <div className="container">
                <h1 className="display-4">Eastside Kings Festival</h1>
                <p className="lead">Love the blues? There's a festival on Austin's east side that's going to have it all.</p>
                <hr className="my-4" />
                <p>Eastside Kings Festival is a celebration for the great living musicians who have given us some of the best years of music.</p>
                <p>The Festival takes place the first week of September putting together great Blues/Gospel/Jazz acts every year for two amazing evenings. This year's show is in East Austin, TX on September 14th and
                15th, 2019.</p>
                <button href="#eventPage" classNameName="button" onClick={() => props.handlePageChange("EventPage")}>Event Info</button>
            </div>
        </div>
    )
}

export default Jumbotron;
