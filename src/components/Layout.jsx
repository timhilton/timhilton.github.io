import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import Dock from "./Dock";
import Desktop from '../svgs/desktop.svg';
import { createRef, useEffect, useRef } from 'react';

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

    for (let i = 2; i <= 5; i++) {
        styles += `
            &:nth-of-type(${i}) {
                animation-delay: ${j}ms;
            }
        `
        j = j - 600;
    }

    return styles;
}

const Container = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
    width: 980px;
    margin: 0 auto;
    position: relative;
    z-index: 2;

    @media (min-width: 735px) and (max-width: 1024px) {
        width: 692px;
    }

    @media (max-width: 734px) {
        width: 87.5%;
        max-width: 414px;
    }
`

const Bg = styled(Desktop)`
    position: absolute;
    z-index: 1;
    min-width: 1440px;
    width: 100%;
    justify-self: center;

    path {
        opacity: 0;
        transform: translateY(100px);
        transition: all 250px ease-in-out;
        animation: ${mountainFadeIn} 1000ms forwards ease-in-out;
        ${createFade()}
    }

    path:first-of-type {
        opacity: 1;
        transform: translateY(0);
        animation: none;
    }


`

export default function Layout({ children }) {
    const theme = {
        background: '25, 25, 25',
        border: '151, 151, 151',
        dockColor: '246, 246, 246'
    }

    return (
        <>
        <ThemeProvider theme={theme}>
            <Container>
                <Main id="main">{children}</Main>
                <Bg />
                <Dock />
            </Container>
        </ThemeProvider>
        </>
    )
}