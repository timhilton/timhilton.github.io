import React, { Component } from "react";
import Heading from "../elements/Heading";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {faGithub, faStrava, faLinkedin, faInstagram, faSpotify} from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    render(){
      return (
              <div className="component-wrap">
                  <Heading title="Contact"/>
                  <div className="contact-wrap">
                      <div><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<a href="mailto:tim@timhilton.net">tim@timhilton.net</a></div>
                      <div><FontAwesomeIcon icon={faGithub}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://github.com/timhilton">GitHub</a></div>
                      <div><FontAwesomeIcon icon={faLinkedin}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/timhiltontech">LinkedIn</a></div>
                      <div><FontAwesomeIcon icon={faStrava}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.strava.com/athletes/timhilton">Strava</a></div>
                      <div><FontAwesomeIcon icon={faInstagram}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tim.hilton/">Instagram</a></div>
                      <div><FontAwesomeIcon icon={faSpotify}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/timhilton79?si=4qhi93PKQheA0Ml399zfhw">Spotify</a></div>
                  </div>


              </div>
      );
    }
}

export default Contact
