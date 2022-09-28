import styled, { keyframes } from "styled-components";
import Ampersand from "../svgs/ampersand.svg";

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Section = styled.section`
    opacity: 0;
    animation: ${fadeIn} 1000ms forwards ease-in-out;
    animation-delay: 3000ms;
    color: rgb(${(props) => props.theme.text});
`

const Headings = styled.div`
    font-weight: normal;
    font-style: italic;
    display: grid;
    grid-template-areas: 
        "amp top-heading"
        "amp bottom-heading"
    ;
    width: max-content;
    margin-bottom: 36px;
    color: rgb(${(props) => props.theme.text});

    h3 {
        height: max-content;
        position: relative;
        font-size: 36px;
        margin: 0;

        @media (max-width: 734px) {
            font-size: 24px;
            line-height: 1.8;
        }

        &:first-of-type {
            grid-area: top-heading;
            align-self: end;
            right: 50px;
            top: 15px;

            @media (max-width: 734px) {
                right: 35px;
            }
        }

        &:last-of-type {
            grid-area: bottom-heading;
            align-self: end;
        }
    }
`

const Amp = styled(Ampersand)`
    width: 125px;
    height: 140px;
    grid-area: amp;
    path {
        fill: rgba(${(props) => props.theme.background}, 0.4);
    }

    @media (max-width: 734px) {
        width: 78px;
        height: 87px;
    }
`

const Copy = styled.p`
    font-style: normal;
    font-weight: 100;
    width: 505px;
    font-size: 24px;
    line-height: 40px;
    color: rgb(${(props) => props.theme.text});

    @media (max-width: 734px) {
        font-size: 18px;
        line-height: 36px;
        width: 100%;
        align-self: flex-end;
    }
`

const Home = () => {
    return (
        <Section>
            <h1>Tim Hilton</h1>
            <Headings>
                    <Amp/>
                    <h3>Web Development</h3>
                    <h3>Creative Services</h3>
            </Headings>
            {/* <Copy>
            I create award winning web experiences primarily focusing on front end development, UX, accessibility, and design.
            </Copy> */}
        </Section>
    )
}

export default Home;