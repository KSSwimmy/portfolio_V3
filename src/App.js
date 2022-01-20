import './index.css';
import { device } from './device'
import ParallaxEffect from './components/ParallaxEffect'
import MobileParallaxEffect from './components/MobileParallaxEffect'
import UnderConstruction from './components/UnderConstruction'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLink, faTimes, faFileAlt } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faLink, faTimes, faFileAlt)




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
          
          {/* <UnderConstruction /> */}
          
    </AppDiv>
    
  </AppContainer>
  );
}

const ParDivMobile = styled.div`
@media ${device.iPadPro} {
  
  position: relative;
  position: fixed;
  z-index: 300;
  width: 100%;
  height: 100vh;
  
  @media screen and (min-width: 1001px) and (max-width: 2000px) {
    display: none;

  }
};



`;

const ParDiv = styled.div`
position: relative;
position: fixed;
z-index: 300;
width: 100%;
height: 100vh ;

@media ${device.iPad} {
  display: none;
}



`;

const AppContainer = styled.div`
margin: 0 auto;
height: 100vh;
width: 100%;
`;

const AppDiv = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: row;
margin: 0 auto;
`;



export default App;
