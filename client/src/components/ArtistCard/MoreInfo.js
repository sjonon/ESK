import React from 'react';
import EventsBtn from '../EventsBtn';
import EventsList from '../EventsList/EventsList';
import EventsListItem from '../EventsList/EventsListItem';
import { Container } from '../Grid';
import API from "../../utils/API"


export default class MoreInfo extends React.Component {
  state = {
    events: []
  }
  // componentDidMount(){
  //   API.getEvents().then((res)=>{
  //     console.log("in moreinfo line 15",res)
  //     this.setState({events:res.data})
  //   })
  // }
  render(props){
    return(
    <div className="cardInfo">
        <h2 style={{backgroundColor:"#137ad6", color:"white", padding:"10px", borderRadius:"5px"}}>{this.props.name}</h2><hr/>
        {/* <h2 style={{backgroundColor:"#137ad6", color:"white", padding:"10px", borderRadius:"5px"}}>{this.props.name}</h2><hr/> */}
        {this.props.event? <h3 style={{backgroundColor:"#137ad6", color:"white", padding:"5px", borderRadius:"5px"}}>Playing At:</h3> : null }
        <div className="moreInfo">
            <h5>{this.props.event[0]}</h5>
            {this.props.event[1] ? <h5>{this.props.event[1]}</h5>: null}
            {this.props.event[2] ? <h5>{this.props.event[2]}</h5>: null}
            {this.props.event[3] ? <h5>{this.props.event[3]}</h5>: null}
            {this.props.event[4] ? <h5>{this.props.event[4]}</h5>: null}
        </div>
        <hr/>
        <div className="media">
            {this.props.about ? <h5>About: {this.props.about} </h5> : null}
            {this.props.spotify ? <iframe title="spotifylink" src={this.props.spotify} width="300" height="315" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> : null}
            {this.props.youtube ? <iframe title="youtubelink" width="560" height="315" src={this.props.youtube} frameBorder="0" allow="encrypted-media; gyroscope" allowFullScreen></iframe> : null}
        </div>
    </div>
    )}
                  }