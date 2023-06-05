import styled from "styled-components";
import Ampersand from "../svgs/ampersand.svg";

// Calculate the color value outside the styled component
const textColor = (props) => props.theme.text;

const Section = styled.section`
    align-items: center;
    color: rgb(${textColor});
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    opacity: 1;
    width: 100%;
`;

const Headings = styled.div`
    color: rgb(${textColor});
    display: grid;
    font-style: italic;
    font-weight: normal;
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
    grid-area: amp;
    height: 140px;
    path {
        fill: rgba(${textColor}, 0.4);
    }
    width: 125px;

    @media (max-width: 734px) {
        height: 87px;
        width: 78px;
    }
`;

const Copy = styled.p`
    background-color: rgba(151, 151, 151, 0.7);
    border-radius: 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    color: rgb(${textColor});
    font-size: 1.5em; /* 24px / 16px = 1.5em */
    font-style: normal;
    font-weight: 100;
    padding: 1em 1.5em;
    width: 87.5%;

    @media (max-width: 734px) {
        font-size: 1.125em; /* 18px / 16px = 1.125em */
        width: 100%;
    }
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
            <Copy>
            I&#39;m an experienced Web Engineer focused on Front End Development working predominately with JavaScript, React, Node, and Sass.  I have a demonstrated history of working and creating award winning web experiences in the marketing/advertising, and entertainment industries.
            </Copy>
        </Section>
    );
};

export default Home;
