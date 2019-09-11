import React, { Component } from 'react';
import ScheduleNav from '../components/ScheduleNav/ScheduleNav';
import { Container } from '../components/Grid';
import API from '../utils/API';
import moment from 'moment';
import "./ScheduleDay.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ScheduleDay extends Component {
  state = {
    events: [],
    artists: [],
    venues: [],
    days: []
  };

  componentDidMount() {
    //this.loadVenues();
    //this.loadArtists();
    this.loadEventsDay();
  }

  //function to load venues
  loadVenues = () => {
    return API.getVenues()
      .then(res => {
        this.setState({ venues: res.data })
      })
  }

  //function to load artists
  loadArtists = () => {
    return API.getArtists()
      .then(res => {
        this.setState({ artists: res.data })
      })
  }

  //function to load events
  loadEventsDay = async () => {
    await this.loadVenues();
    await this.loadArtists();
    API.getEventsByDay()
      .then(res => {
        const eventsByDay = res.data;
        const venues = this.state.venues;
        const artists = this.state.artists;
        const eventDates = [];
        //find unique dates in the dataset also parse them into the format required
        for (var i = 0; i < eventsByDay.length; i++) {
          const artistNames = [];
          const parsedDate = moment(eventsByDay[i].startDate).format("ddd, MMM Do YYYY");
          eventsByDay[i].eventDate = parsedDate;
          if (eventDates.indexOf(parsedDate) === -1) {
            eventDates.push(parsedDate);
          }
          //add the location name to the dataset
          eventsByDay[i].locationName = venues.filter(row => row.locationID === eventsByDay[i].locationID)[0].locationName;

          //add the location map to the dataset
          eventsByDay[i].locationMap = venues.filter(row => row.locationID === eventsByDay[i].locationID)[0].locationMap;

          //add the artists
          eventsByDay[i].artistNames = "";
          for (var a = 0; a < eventsByDay[i].artists.length; a++) {
            const artist = artists.filter(r => r._id === eventsByDay[i].artists[a]);
            if (artist && artist[0]) {
              artistNames.push(artist[0].artistName);
            }
          }

          eventsByDay[i].artistNames = artistNames.join(", ");
        }
        this.setState({
          events: eventsByDay,
          days: eventDates
        })
        // console.log(eventsByDay)
      });
  }
  createScheduleLayout = () => {

    //Losing state in the loops hence these temporary variables to hold the state data
    // const stateVenues = this.state.venues;
    const stateEvents = this.state.events;
    const stateDays = this.state.days;


    let daysArr = [];
    for (let i = 0; i < stateDays.length; i++) {
      const tempEventList = stateEvents.filter(row => row.eventDate === stateDays[i])
      let venuesArr = [];
      console.log("venArr", venuesArr)
      console.log("tempEventList", tempEventList)
      //loop through the temp events list to assign child elements
      for (let e = 0; e < tempEventList.length; e++) {
        // const tempVenueList = tempEventList.filter(row => row.locationName === tempEventList[e].locationName)
        let eventArr = [];
        // const venuesAdded = [];
        // console.log("tempVenueList", tempVenueList)
        //assign venue sub-headings in this loop
        // for (let v = 0; v < tempVenueList.length; v++) {
        //if the location matches event location
        // if (tempEventList[e].locationName === tempVenueList[v].locationName) {
          eventArr.push(
            <div>
              <h4>{moment(tempEventList[e].startDate).format("ddd")}: {moment(tempEventList[e].startTime, "HH:mm").format("hh:mm a")} - {moment(tempEventList[e].endTime, "HH:mm").format("hh:mm a")}</h4>
              <h4>{tempEventList[e].artistNames}</h4>
              {/* <button style={{ fontSize: "20px" }} className="button bdButton"><FontAwesomeIcon icon="id-badge" />More Info</button> */}
            </div>
          )
        // }
      
        console.log("eventArr", eventArr)
    // }
        venuesArr.push(
          <Container className="card scheduleByDay">
            <h3>{tempEventList[e].locationName}</h3>
            {eventArr}
          </Container>);

      }
      daysArr.push(
        <Container>
          <h2 className="dayLabel">{stateDays[i]}</h2>
          {venuesArr}
        </Container>
      )


    }
    console.log("daysArr", daysArr)
    return daysArr;
  }

  render() {
    return (
      <div>
        <ScheduleNav />
        <Container className="under-nav">
          {this.createScheduleLayout()}
        </Container>
      </div>
    );
  }
}

// export default connect(mapStateToProps, {})(ScheduleDay);
export default ScheduleDay;