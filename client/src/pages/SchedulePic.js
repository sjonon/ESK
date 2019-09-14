import React, { Component } from 'react';
import { Container } from '../components/Grid';
import esksched from '../images/esk_schedule.jpg';
import './FAQ.css';

class SchedulePic extends Component {

    render() {
        return (
            <Container>
                <div id="schedule">
                <h1>Eastside Kings Festival</h1>
                <img src={esksched} alt="schedule"/>
                </div>
            </Container>
        )
    }
}

export default SchedulePic;