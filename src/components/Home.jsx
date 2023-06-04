import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Ampersand from "../svgs/ampersand.svg";

// Calculate the color value outside the styled component
const textColor = (props) => props.theme.text;

const Section = styled.section`
    align-items: center;
    color: rgb(${textColor});
    display: flex;
    height: 100%;
    justify-content: center;
    opacity: 1;
    width: 100%;
`;

const Headings = styled.div`
    font-style: italic;
    font-weight: normal;
    color: rgb(${textColor});
    display: grid;
    grid-template-areas: 
        "amp top-heading"
        "amp bottom-heading";
    margin-bottom: 36px;
    width: max-content;

    h3 {
        align-self: end;
        font-size: 2.25em; /* 36px / 16px = 2.25em */
        grid-area: bottom-heading;
        height: max-content;
        margin: 0;
        position: relative;
    
        @media (max-width: 734px) {
            font-size: 1.25em;
            line-height: 1.8;
        }
    
        &:first-of-type {
            align-self: end;
            grid-area: top-heading;
            right: 50px;
            top: 15px;
    
            @media (max-width: 734px) {
                right: 35px;
                top: 9px;
            }
        }
    }    
`;

const Amp = styled(Ampersand)`
    width: 125px;
    height: 140px;
    grid-area: amp;
    path {
        fill: rgba(${textColor}, 0.4);
    }

    @media (max-width: 734px) {
        width: 78px;
        height: 87px;
    }
`;

const Copy = styled.p`
    font-style: normal;
    font-weight: 100;
    width: 505px;
    font-size: 1.5em; /* 24px / 16px = 1.5em */
    line-height: 2.5em; /* 40px / 16px = 2.5em */
    color: rgb(${textColor});

    @media (max-width: 734px) {
        font-size: 1.125em; /* 18px / 16px = 1.125em */
        line-height: 2.25em; /* 36px / 16px = 2.25em */
        width: 100%;
        align-self: flex-end;
    }
`;

const Home = () => {
    return (
        <Section>
            <Headings>
                <Amp/>
                <h3>Web Development</h3>
                <h3>Creative Services</h3>
            </Headings>
        </Section>
    );
};

export default Home;
