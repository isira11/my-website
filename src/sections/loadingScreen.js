import React, { Component } from 'react'
import anime from 'animejs';
import { LoadingContainer } from '../components/container'
import { Heading, Flex, Box, Image, Text } from 'rebass';

class Load extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.animate()
    }

    animate() {
        const {finishLoading} = this.props
        const Boad = anime.timeline({
            complete: () => finishLoading()
        });

        Boad
        .add({
            targets: '#isira',
            rotate: '1turn',
            duration: 1000
          })
        .add({
            targets: '#isira',
            scale: 3,
            duration: 3000
          })
          .add({
            targets: '#isira',
            scale: 0,
            duration: 200
          })

    }
    render() {

        return (
            <LoadingContainer>
            <div id='isira'>
                <Heading color='white' textAlign='center' fontSize={[1,4,6]}> 
                    Hey, Welcome!
                </Heading>
            </div>
            </LoadingContainer>
        )
    }
}

export default Load;