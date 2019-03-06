import React, { Fragment } from 'react';
import Headroom from 'react-headroom';
import { Heading, Flex, Box, Text, Image, Link } from 'rebass';
import styled from 'styled-components';
import { SectionLinks, SectionLink } from 'react-scroll-section';
import Fade from 'react-reveal/Fade';
const Menu = () => (

    <Headroom >
        
        <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            p={3}
            bg="#05034c52">
            <Fade cascade top>
            <SectionLink section="hero">
            {(link) => (
                <Text onClick={link.onClick} color='white' fontSize={[1, 2, 3]}>I-PMT</Text>
            )}
            </SectionLink>
            <Flex mr={[0, 3, 5]}>
                <SectionLink section="about">
                    {(link) => (
                        <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
                            <span onClick={link.onClick} fontSize={[1, 2, 3]} >About</span>
                        </Box>
                    )}
                </SectionLink>
                <SectionLink section="projects">
                    {(link) => (
                        <Box ml={[2, 3]} color="background" fontSize={[2, 3]}>
                            <span onClick={link.onClick} fontSize={[1, 2, 3]} >Project</span>
                        </Box>
                    )}
                </SectionLink>


            </Flex>
       
            </Fade>
        </Flex>
        
    </Headroom>
);

export default Menu;