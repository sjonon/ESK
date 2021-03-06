import React, { Component } from 'react';
import { Container } from '../components/Grid';
import ScheduleNav from '../components/ScheduleNav';
import esksched from '../images/esk_schedule.jpg';
import './FAQ.css';

class SchedulePic extends Component {

    render() {
        return (
            <div>
            <ScheduleNav />
            <Container>
                <div id="schedule" style={{"margin-top": "70px"}}>
                <h1 style={{textAlign:"center", fontSize:"40px", fontFamily: "Shrikhand, cursive"}}>Coming Soon</h1>
                <p>The 2019 Eastside Kings Festival has wrapped up.  But while you wait for us to update the schedule for 2020, take a look at
                    our schedule below for what took place in 2019 and enjoy listening to previews of some of the artists you loved from 2019 on our Schedule By Artist page.
                </p>
                <img src={esksched} alt="schedule"/>
                </div>
            </Container>
            </div>
        )
    }
}

export default SchedulePic;