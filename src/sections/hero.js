import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby';
import {Container} from '../components/container'
import { Heading, Flex, Box, Text ,Image} from 'rebass';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';


const HeroHeading = styled(Heading)`
@import url('https://fonts.googleapis.com/css?family=Orbitron');
@import url('https://fonts.googleapis.com/css?family=Inconsolata|Josefin|Maven+Pro');

font-family: 'Orbitron', sans-serif;
font-family: 'Maven Pro', monospace;

`
const Hero = () => (
    <Container id='hero' >
        <StaticQuery
            query={graphql`
    query IndexQuery{
        allMarkdownRemark(filter:{fileAbsolutePath:{regex:"/Hero/"}}){
          edges{
            node{
              html
              frontmatter{
                name
                content
                title
                des
              }
            }
          }
        }
      }
    `}




    render={data => {
                const { html } = data.allMarkdownRemark.edges[0].node
                const { name, content, title ,des} = data.allMarkdownRemark.edges[0].node.frontmatter
                return (
                  <Fade bottom cascade>
                  
                  <Flex flexDirection='column' mt='30px'>
                        <HeroHeading
                            textAlign="left"
                            as="h1"
                            color="#65ffda"
                            fontSize={[3, 4, 5]}
                            mb={[3, 0, 3]}
                            mt={[0, 0, 0]}
                        >
                            {title}
                        </HeroHeading>
                       
                        <HeroHeading
                            textAlign="left"
                            as="h1"
                            color="white"
                            fontSize={[6, 7, 8]}
                            mb={[3, 0, 3]}
                        >
                            {name}
                        </HeroHeading>
              
     
                        <HeroHeading
                            textAlign="left"
                            as="h1"
                            color="grey"
                            fontSize={[5, 5, 5]}
                            mb={[1, 2, 5]}
                            marginWidth='1px'
                            
                        >
                            {content}
                        </HeroHeading>
                 
           
                        <HeroHeading
                            width={["100%","95%","50%"]}
                            textAlign="left"
                            as="h3"
                            color="grey"
                            fontSize={[2, 3, 4]}
                            mb={[6, 5, 5]}
                            marginWidth='1px'
                        >
                            {des}
                        </HeroHeading>
                        <HeroHeading
                            width={["100%","95%","50%"]}
                            textAlign="left"
                            as="h3"
                            color="grey"
                            fontSize={[2, 3, 4]}
                            mb={[6, 5, 5]}
                            marginWidth='1px'
                        >
                        </HeroHeading>
          
 </Flex>
                   
</Fade>
                )
            }}
        />
    </Container>
)

export default Hero;
