import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import Ampersand from "../svgs/ampersand.svg";

// Calculate the color value outside the styled component
const textColor = (props) => props.theme.text;

const Section = styled.section`
    opacity: 1;
    color: rgb(${textColor});
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

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
    color: rgb(${textColor});

    h3 {
        height: max-content;
        position: relative;
        font-size: 36px;
        margin: 0;

        @media (max-width: 734px) {
            font-size: 1.25em;
            line-height: 1.8;
        }

        &:first-of-type {
            grid-area: top-heading;
            align-self: end;
            right: 50px;
            top: 15px;

            @media (max-width: 734px) {
                right: 35px;
                top: 9px;
            }
        }

        &:last-of-type {
            grid-area: bottom-heading;
            align-self: end;
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
    font-size: 24px;
    line-height: 40px;
    color: rgb(${textColor});

    @media (max-width: 734px) {
        font-size: 18px;
        line-height: 36px;
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
