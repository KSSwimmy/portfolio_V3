import ParallaxEffect from './components/ParallaxEffect'
import styled from 'styled-components'


import './index.css';

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
