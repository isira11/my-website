import React from 'react'
import Layout from '../components/layout'
import {Hero,About,Projects} from '../sections/'
import Menu from '../components/menu';

const IndexPage = ({location})=>{
    console.log(location.state)
    const Welcome = (location.state==null)?true:false;
    return(
    <Layout Welcome={Welcome}>
        <Menu/>
        <Hero/>
        <About/>
        <Projects/>
    </Layout>
    )
}
export default IndexPage;