import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer(props) {
    return (
        <div className="footer">
            <ul>
                <li><Link to="/sponsors">Sponsors</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <p>©2019 Endemic Design</p>
            <p>This project is supported in part by the Cultural Arts Division of the City of Austin Economic Development Department.</p>
        </div>
    )
}

export default Footer;