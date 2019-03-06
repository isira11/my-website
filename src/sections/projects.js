import React from 'react';
import { Heading, Card as CardRebass, Box, Text, Image, Flex} from 'rebass';
import { Link } from "gatsby"
import { Container } from '../components/container'
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Topic from '../components/topic';
const CardContainer = styled.div`
display: grid;
grid-gap: 30px;
grid-template-columns: repeat(
  auto-fill,
  minmax(350px, 1fr)
);
justify-items: center;

@media only screen and (max-width: 400px) {
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  
}
`;

const TextContainer = styled.div`
display: flex;
flex-direction: column;
width=100%;
`


const Card = styled(CardRebass).attrs({
  p: 0,
  fontSize: 6,
  fontWeight: 'bold',
  width: [1, 1, 1 / 2],
  p: 1,
  bg: 'white',
  borderRadius: 8,
  boxShadow: '0 0px 0px #ffffff',
})`
    width: 100% !important;
    position: relative;
    box-shadow: 2px 2px 2px #3b00ff;
    transition: all 0.25s;
    top: 0px;
    height: 100%;

  
    &:hover {
      top: -10px;
      box-shadow: 0px -10px 0px #dd0896;
    }
  `;

const Projects = () => (
  <Container id="projects">
    <Topic>2. Projects</Topic>
    <StaticQuery
      query={graphql`
    query projectQuery{
        allMarkdownRemark(filter:{fileAbsolutePath:{regex:"/Projects/"}}){
          edges{
            node{
              fields{
                slug
              }
              html
              frontmatter{
                info
                tech
                title
                id
              }
            }
          }
        }
      }
    `}

      render={data => {
        const projects = data.allMarkdownRemark.edges.map((p, i) => {
          const {title}= p.node.frontmatter;
          return (
            <Card key={i} p={0} color='blue'>
            <Heading color='purple'>Project: {i+1}</Heading>
            <Flex flexDirection='column'>
              <Flex>
                <Flex flexDirection='column' width='100%'>
                  <Text fontSize={[1, 2, 3]} >
                    {p.node.frontmatter.title}
                  </Text >
                  <Text fontSize={[1, 2, 3]} >
                    {p.node.frontmatter.info}
                  </Text >
                </Flex>
                <Flex flexDirection='column'>
                <Flex justifyContent=' flex-end' >
                <Box   width={[1/3,1/2,1]}   > <Image  borderRadius={8} src='https://i.gifer.com/74zF.gif'/></Box>
                </Flex>
                <Text fontSize={[1, 2, 3]} color='pink'><Link to={p.node.fields.slug}             
                state={{ f: p.node.frontmatter.info }}
                >Read more</Link></Text>
                </Flex>
              </Flex >
              <Flex >
              <div >
              <Heading fontSize={[1, 2, 3]}>Tools used:-</Heading>
              <Box  fontSize={[1, 2, 3]} color='purple'>{p.node.frontmatter.tech}</Box>
              </div>
              <Flex  justifyContent='flex-end'><Box   width={[1/10,1/9,1/8]}   > <Image  borderRadius={8} src='https://image.flaticon.com/icons/png/512/25/25231.png'/></Box></Flex>
              </Flex>
              </Flex>
            </Card>)
        });

        return (
          <CardContainer>
            <Fade left>
            {projects}
            </Fade>
          </CardContainer>
          )
      }}
    />
  </Container>
)

export default Projects