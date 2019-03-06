import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Section } from 'react-scroll-section';
const Container_div = styled.div`
min-height: 100vh;
min-width: 320px;
max-width: 1366px;
display: flex;
flex: 0 1 auto;
flex-direction: column;
justify-content: center;
scroll-behavior: smooth;
`
const Path = styled.path`
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: dash 5s linear alternate infinite;
`
const DefaultBackground = () => <div />;

const Container = ({ children, Background = DefaultBackground ,id="ghg"}) => (
    <>
    <Section id={id} style={{ position: 'relative' }}>
        <Background />
        <Box pl={[3, 20, 150]}
            pr={[3, 5, 50]}
            bg="#03002f"
            >
            <Container_div>{children}</Container_div>
        </Box>
        </Section>
    </>
)

const LoadingContainer = ({ children, Background = DefaultBackground}) => (
    <>
        <Background />
        <Box pl={[3, 20, 150]}
            pr={[3, 5, 50]}
            bg="#03002f"
            >
            <Container_div>{children}</Container_div>
        </Box>
    </>
)






const Body = styled.body`
background-color:
`


export {
    Container,
    LoadingContainer
}

