import React, { PureComponent } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin, faInstagram, faSpotify} from '@fortawesome/free-brands-svg-icons';

export default class Sidebar extends PureComponent {
    render(){
      return (
        <aside className="sidebar">
            <h2>Tim Hilton</h2>

            <ul>
                <li>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/timhilton"
                    >
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/timhiltontech"
                    >
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </li>
                <li>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/tim.hilton/"
                    >
                        <FontAwesomeIcon icon={faInstagram}/>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://open.spotify.com/user/timhilton79?si=4qhi93PKQheA0Ml399zfhw"
                    >
                        <FontAwesomeIcon icon={faSpotify}/>
                    </a>
                </li>
            </ul>
        </aside>
      );
    }
}