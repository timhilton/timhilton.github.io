import styled, { ThemeProvider } from 'styled-components';
import Dock from "./Dock";
import Desktop from '../svgs/desktop.svg';

const Container = styled.div`
  display: grid;
  grid-template-areas: "main" "dock";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  height: 100vh;
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
    grid-row-start: main;
    grid-row-end: dock;
    position: absolute;
    z-index: 1;
    min-width: 1440px;
    width: 100%;
    justify-self: center;
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
                <Bg/>
                <Dock />
            </Container>
        </ThemeProvider>
        </>
    )
}