import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import {Container} from '../components/container';
import { Link } from "gatsby";
import { Heading, Flex, Box, Text, Image, } from 'rebass';
import Flip from 'react-reveal/Flip';
import { Redirect } from 'react-router';
import Headroom from 'react-headroom';


const Header = ()=>(
  <Headroom >
        <Flex
            flexWrap="wrap"
            justifyContent="space-between"
            alignItems="center"
            p={3}
            bg="#05034c52">
            
           <Link to='/' state={{}}><Text color='white' fontSize={[1, 2, 3]}>I-PMT</Text></Link> 
            </Flex>
  </Headroom>
)
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout Welcome={false}>
    <Header/>
    <Flip right>
    <Container>
      <div>
        <Heading color='white'>{post.frontmatter.title}</Heading>
        <br/>
        <Text color='red'>routes.get({post.frontmatter.title})</Text>
        <br/>
        <Link to='/' state={{}}>back</Link>
      </div>
    </Container>
    </Flip>
    </Layout>
  )
}

const goBack = ()=>
{
  this.props.history.goBack();
}


export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`