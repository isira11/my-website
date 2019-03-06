import React from 'react'
import { Heading } from 'rebass';
import styled from 'styled-components';
const TitleHeading = styled(Heading)`
@import url('https://fonts.googleapis.com/css?family=Orbitron');
font-family: 'Orbitron', sans-serif;
`

const Topic = ({children}) => (
    <TitleHeading as="h1" fontSize={[2, 3, 4]} color="White" mb={4}>
    {children}
    </TitleHeading>
)

export default Topic;