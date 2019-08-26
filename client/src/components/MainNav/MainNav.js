import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MainNav extends Component {
    

    render() {
        return (
            <ul className="nav" id="mainNav">
                <li>
                    {/* <a href="/">ESK Festival</a> */}
                    <Link to="/">ESK Festival</Link>
                </li>
                <li>
                    {/* <a href="/schedule" onClick={() => this.props.handlePageChange("Schedule")}><FontAwesomeIcon icon="calendar-alt" /> Schedule</a> */}
                    <Link to="/schedule" ><FontAwesomeIcon icon="calendar-alt" /> Schedule</Link>

                </li>
                <li key="faq">
                    <Link to="/faq"><FontAwesomeIcon icon="question-circle" /> FAQ</Link>
                    {/* <a href="/faq" onClick={() => this.props.handlePageChange("FAQ")}><FontAwesomeIcon icon="question-circle" /> FAQ</a> */}
                </li>
            </ul>
            
       )
    }
}


export default MainNav;