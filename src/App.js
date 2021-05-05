import './index.css';
import ParallaxEffect from './components/ParallaxEffect'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faLink)




function App() {
  return (
  <AppContainer>
    <AppDiv className="App">
          <ParDiv>
            <ParallaxEffect />
          </ParDiv>
      

      
    </AppDiv>
  </AppContainer>
  );
}


const ParDiv = styled.div`
position: relative;
position: fixed;
z-index: 3;
width: 100%;
height: 100vh;
`;

const AppContainer = styled.div`
margin: 0 auto;
min-height: 100vh;
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
