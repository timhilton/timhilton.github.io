import styled, { keyframes } from "styled-components";
import Image from "next/image";
import GitHub from "../svgs/github.svg";
import Mail from "../svgs/mail.svg";
import LinkedIn from "../svgs/linkedin.svg";
import Spotify from "../svgs/spotify.svg";
import ListItem from "./DockItems";
import Resume from '../svgs/resume.svg';
import Link from "next/link";

const dockSlideIn = keyframes`
    0% {
        bottom: -175px;
    }
    100% {
        bottom: 24px;
    }
`

const DockContainer = styled.nav`
    bottom: -175px;
    z-index: 5;
    position: absolute;
    overflow: visibile;
    width: 100%;
    animation: ${dockSlideIn} 1500ms forwards ease-in-out;
    animation-delay: 3000ms;
`

const List = styled.ul`
    color: rgb(${(props) => props.theme.dockColor});
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
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 230px;
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
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://s3.amazonaws.com/www.timhilton.net/THiltonResume2022.pdf"
                    >
                        <Resume />
                    </a>
                </ListItem>
                <ListItem>
                    {/* <a href='mailto:tim@timhilton.net'>
                        <Mail />
                    </a> */}
                    <Link href='/contact' prefetch={false}>
                        <Mail />
                    </Link>
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
                        <Image 
                            src='/instagram.png' 
                            width={60}
                            height={60}
                            alt="Instagram" 
                        />
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