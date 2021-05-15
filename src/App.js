import './index.css';
import { device } from './device'
import ParallaxEffect from './components/ParallaxEffect'
import MobileParallaxEffect from './components/MobileParallaxEffect'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLink, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLink, faTimes)




function App() {
  return (
  <AppContainer>
    <AppDiv className="App">
          <ParDiv>
            <ParallaxEffect />
          </ParDiv>

          <ParDivMobile>
            <MobileParallaxEffect />
          </ParDivMobile>
          
    </AppDiv>
    
  </AppContainer>
  );
}

const ParDivMobile = styled.div`
@media ${device.tablet} {
  
  position: relative;
  position: fixed;
  z-index: 300;
  width: 100%;
  height: 100vh ;
  
};



`;

const ParDiv = styled.div`
position: relative;
position: fixed;
z-index: 300;
width: 100%;
height: 100vh ;

@media ${device.tablet} {
  display: none;
}



`;

const AppContainer = styled.div`
margin: 0 auto;
height: auto;
width: 100%;
`;

const AppDiv = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
margin: 0 auto;
`;



export default App;
