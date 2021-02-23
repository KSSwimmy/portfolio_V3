import ParallaxEffect from './components/ParallaxEffect'
import styled from 'styled-components'
import IntroTop from './components/Into/IntroTop'
import IntroBottom from './components/Into/IntroBottom'
import AboutMe from './components/AboutMe'
import ImageGallery from './components/Work/ImageGallery'
import Form from './components/Form/Form'

import './index.css';

function App() {
  return (
  <AppContainer>
    <AppDiv className="App">
          <ParDiv>
            <ParallaxEffect />
          </ParDiv>
      

      <Column> 
        <IntroTopContainer>
          <IntroTop /> 
        </IntroTopContainer>
        <IntroBottomContainer>
          <IntroBottom />
        </IntroBottomContainer>
        <AboutMe />
        <ImageGalleryContainer>
          <ImageGallery />
        </ImageGalleryContainer>
        <Form />
      </Column>  
    </AppDiv>
  </AppContainer>
  );
}


const ParDiv = styled.div`
position: relative;
position: fixed;
z-index: 3;
width: 50%;
height: 100vh;
`;


const AppDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const AppContainer = styled.div`
margin: 0 auto;
min-height: 100vh;
width: 100%;
`;

const Column = styled.div`
margin-left: 50%;
display: flex;
flex-direction: column; 
width: 50%;
height: 100vh;

`;

const IntroTopContainer = styled.div `
position: relative;
z-index: 2;
`;

const IntroBottomContainer = styled.div `
position: relative;
z-index: 1;
`;

const ImageGalleryContainer = styled.div`
width: 100%;
height: 100vh;
z-index: 5;
`;

export default App;