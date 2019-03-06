import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import { Container } from '../components/container'
import { Heading, Flex, Box, Image, Text } from 'rebass';
import Fade from 'react-reveal/Fade';
import Topic from '../components/topic'

const About = () => (
    <Container id="about">
        <Topic>1. About me</Topic>
        <StaticQuery
            query={graphql`
    query AboutQuery{
        allMarkdownRemark(filter:{fileAbsolutePath:{regex:"/About/"}}){
          edges{
            node{
              html
              frontmatter{
                name
                content
                img
              }
            }
          }
        }
      }
    `}

            render={data => {
                const { html } = data.allMarkdownRemark.edges[0].node;
                const { img, content } = data.allMarkdownRemark.edges[0].node.frontmatter;

                return (
                    <Flex justifyContent="center" flexWrap="wrap">
                        <Box width={[1, 1, 4 / 6]} px={[1, 2, 4]} >
                            <Fade left>
                                <Text
                                width={["100%","95%","70%"]}
                                    alignItems="top"
                                    fontSize={[1, 2, 3]}
                                    color="white"
                                >{content}
                                </Text>
                           
                            </Fade>
                        </Box>
                        <Box width={[1, 1, 2 / 6]} px={[1, 2, 4]}>
                            <Fade right>
                                <Image
                                    src={img}
                                    mt={[4, 4, 0]}
                                    ml={[0, 0, 1]}
                                />
                            </Fade>
                        </Box>
                    </Flex>
                )
            }}
        />
    </Container>
)

export default About