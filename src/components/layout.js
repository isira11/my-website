import React, { Component } from 'react'
import { styled, createGlobalStyle, ThemeProvider } from 'styled-components';
import { MainContainer } from '../components/container'
import { ScrollingProvider } from 'react-scroll-section';
import Load from '../sections/loadingScreen'
const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  width: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
  
}
body {
  margin: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background-color: #330a42;

`;

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isWelcome:props.Welcome,
      isLoading: true,
    }
  }

  finishedLoading = () => {
    this.setState({ isLoading: false })
  }
  componentDidMount(){
    //this.setState({isLoading: false})
  }

  render() {
    const { children } = this.props;
    const { isLoading } = this.state;
    return (
      <div>
        <GlobalStyle />
        {(isLoading && this.state.isWelcome) ? (
          <Load finishLoading={this.finishedLoading} />
        ) : (<ScrollingProvider>
          {children}
        </ScrollingProvider>)}
      </div>
    )
  }
};
export default Layout;