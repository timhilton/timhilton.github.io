import styled from "styled-components";
import GitHub from "../svgs/github.svg";
import Mail from "../svgs/mail.svg";
import LinkedIn from "../svgs/linkedin.svg";
import Instagram from "../svgs/instagram.svg";
import Spotify from "../svgs/spotify.svg";
import ListItem from "./DockItems";
import Link from "next/link";

const DockContainer = styled.nav`
    margin-left: auto;
    margin-right: auto;
    grid-area: dock;
    background-color: rgba(${(props) => props.theme.dockColor}, 0.2);
    border-radius: 20px;
    border: rgba(${(props) => props.theme.border}, 0.5); 
    margin-bottom: 24px;
    color: rgb(${(props) => props.theme.color});
    z-index: 5;
    position: relative;
    overflow: visibile;
    max-height: 115px;
`

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 10px 15px 15px 15px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    height: 115px;
    overflow: visible;

    @media (max-width: 734px) {
        padding: 0 10px 10px 10px;
        height: 78px;
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