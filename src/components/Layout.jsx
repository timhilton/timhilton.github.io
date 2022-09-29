import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import Dock from "./Dock";
import Desktop from './Desktop';
import Toggle from './Toggle';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from 'react-use';
import Sky from './Sky';

const mountainFadeIn = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

const createFade= () => {
    let styles = '';
    let j = 2500;

    for (let i = 1; i <= 5; i++) {
        styles += `
            &:nth-of-type(${i}) {
                animation-delay: ${j}ms;
            }
        `
        j = j - 750;
    }

    return styles;
}


function use100vh() {
    const ref = useRef();
    const { height } = useWindowSize();

    useEffect(
        () => {
        if (!ref.current) {
            return;
        }
        ref.current.style.height = height + 'px';
        },
        [height],
    );
    return ref;
}

const Container = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(0deg, ${(props) => props.theme.colors.stop1} 33.892%, ${(props) => props.theme.colors.start1} );
`

const Main = styled.main`
    width: 980px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    pointer-events: none;

    @media (min-width: 735px) and (max-width: 1024px) {
        width: 692px;
    }

    @media (max-width: 734px) {
        width: 87.5%;
        max-width: 414px;
    }
`

const H1 = styled.h1`
    position: absolute;
    top: 24px;
    left: 48px;
    color: rgb(${(props) => props.theme.text});
    margin: 0;
    padding: 0;
    line-height: 1em;
    font-size: 2em;

    @media (max-width: 734px) {
        top: 9px;
        left: 24px;

        font-size: 2em;
    }
`

const Bg = styled(Desktop)`
    position: absolute;
    z-index: 1;
    min-width: 1680px;
    width: 100%;
    justify-self: center;
    pointer-events: none;

    path {
        opacity: 0;
        transform: translateY(100px);
        transition: all 250ms ease-in-out;
        animation: ${mountainFadeIn} 1000ms forwards ease-in-out;
        ${createFade()}
    }
`

const lightMode = {
    background: '25, 25, 25',
    border: '151, 151, 151',
    dockColor: '246, 246, 246',
    text: "25, 25, 25",
    colors: {
        start1: "#6BB5E5",
        stop1: "#B0D8EC",
        start2: "#87904A",
        middle2: "#769BC5",
        stop2: "#7096C3",
        start3: "#6E6865",
        stop3: "#6F90BB",
        start4: "#777D3B",
        stop4: "#252B27",
        start5: "#AF9883",
        stop5: "#718034"
    }
}

const darkMode = {
    background: '151, 151, 151',
    border: '246, 246, 246',
    dockColor: '246, 246, 246',
    text: "246, 246, 246",
    colors: {
        start1: "#00438C",
        stop1: "#6776A7",
        start2: "#004383",
        middle2: "#384C81",
        stop2: "#002354",
        start3: "#002957",
        stop3: "#002052",
        start4: "#292F53",
        stop4: "#051F4A",
        start5: "#0A1220",
        stop5: "#002760"
    }
}

export default function Layout({ children }) {
    const theme = {
        light: lightMode,
        dark: darkMode
    }

    const ref = use100vh();

    const [selectedTheme, setSelectedTheme] = useState('dark');

    return (
        <>
        <ThemeProvider theme={selectedTheme === 'light' ? theme.light : theme.dark}>
            <Container  ref={ref}>
                <Sky selectedTheme={selectedTheme}/>
                <H1>Tim Hilton</H1>
                <Main id="main">{children}</Main>
                <Toggle themePicker={setSelectedTheme}/>
                <Bg />
                <Dock />
            </Container>
        </ThemeProvider>
        </>
    )
}