import styled, { keyframes } from "styled-components";
import GitHub from "../svgs/github.svg";
import Mail from "../svgs/mail.svg";
import LinkedIn from "../svgs/linkedin.svg";
import Instagram from "../svgs/instagram.svg";
import Spotify from "../svgs/spotify.svg";
import ListItem from "./DockItems";
import Link from "next/link";
import { useEffect } from "react";

const dockSlideIn = keyframes`
    0% {
        bottom: -150px;
    }
    100% {
        bottom: 24px;
    }
`

const DockContainer = styled.nav`
    bottom: -150px;
    z-index: 5;
    position: fixed;
    overflow: visibile;
    width: 100%;
    animation: ${dockSlideIn} 750ms forwards ease-in-out;
    animation-delay: 3000ms;
`

const List = styled.ul`
    background-color: rgba(${(props) => props.theme.dockColor}, 0.2);
    border: rgba(${(props) => props.theme.border}, 0.5); 
    color: rgb(${(props) => props.theme.color});
    border-radius: 20px;
    list-style: none;
    margin: 0 auto;
    padding: 10px 15px 15px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: 115px;
    width: max-content;
    overflow: visible;

    @media (max-width: 734px) {
        padding: 0 10px;
        height: 66px;
    }
`

const Dock = () => {
    return (
        <DockContainer>
            <List>
                <ListItem>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://github.com/timhilton"
                    >
                        <GitHub />
                    </a>
                </ListItem>
                <ListItem>
                    <a href='mailto:tim@timhilton.net'>
                        <Mail />
                    </a>
                </ListItem>
                <ListItem>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/timhiltontech"
                    >
                        <LinkedIn />
                    </a>
                </ListItem>
                <ListItem>
                    <a 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.instagram.com/tim.hilton/"
                    >
                        <Instagram />
                    </a>
                </ListItem>
                <ListItem>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://open.spotify.com/user/timhilton79?si=4qhi93PKQheA0Ml399zfhw"
                    >
                        <Spotify />
                    </a>
                </ListItem>
            </List>
        </DockContainer>
    );
}

export default Dock;