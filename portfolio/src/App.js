import ParallaxEffect from './components/ParallaxEffect'
import styled from 'styled-components'
import Intro from './components/Into/IntroTop'
import './index.css';

function App() {
  return (
    <AppDiv className="App">

      <ParDiv>
        <ParallaxEffect />
      </ParDiv> 

      <Column> 
        <Intro /> 
      </Column>
      
    </AppDiv>
  );
}

const ParDiv = styled.div`
position: relative;
width: 50%;
height: 100vh;
`

const AppDiv = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 100vh;
`
const Column = styled.div`
display: flex;
flex-direction: column; 
width: 50%;
height: 100vh;
`


export default App;
