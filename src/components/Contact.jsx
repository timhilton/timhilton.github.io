import React, { Component } from "react";
import Heading from "../elements/Heading";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faFilePdf} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin, faInstagram, faSpotify} from '@fortawesome/free-brands-svg-icons';

class Contact extends Component {
    render(){
      return (
              <div className="component-wrap">
                  <Heading title="Contact"/>
                  <div className="contact-wrap">
                      <div className="contact-1"><FontAwesomeIcon icon={faEnvelope} />&nbsp;&nbsp;<a href="mailto:tim@timhilton.net">tim@timhilton.net</a></div>
                      <div className="contact-2"><FontAwesomeIcon icon={faGithub}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://github.com/timhilton">GitHub</a></div>
                      <div className="contact-3"><FontAwesomeIcon icon={faLinkedin}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/timhiltontech">LinkedIn</a></div>
                      <div className="contact-4"><FontAwesomeIcon icon={faInstagram}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tim.hilton/">Instagram</a></div>
                      <div className="contact-5"><FontAwesomeIcon icon={faSpotify}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/user/timhilton79?si=4qhi93PKQheA0Ml399zfhw">Spotify</a></div>
                      <div className="contact-6"><FontAwesomeIcon icon={faFilePdf}/>&nbsp;&nbsp;<a target="_blank" rel="noopener noreferrer" href="https://s3.amazonaws.com/www.timhilton.net/TimHiltonResume2019.pdf">Resume</a></div>
              </div>


              </div>
      );
    }
}

export default Contact
