import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import TheSun from '../SVG/sun.svg'
import Earth from '../SVG/earth.svg'
import Jupiter from '../SVG/jupiter.svg'
import Mars from '../SVG/mars.svg'
import Saturn from '../SVG/saturn.svg'
import Mercury from '../SVG/mercury.svg'
import Venus from '../SVG/venus.svg'
import Moon from '../SVG/moon.svg'
import Satellite from '../SVG/satellite.svg'
import LandingPageStars from '../SVG/LittleStars.svg'
import LandingPageBiggerStars from '../SVG/BIGGERSTARS.svg'
import Neptune from '../SVG/neptune.svg'
import Uranus from '../SVG/uranus.svg'
import Pluto from '../SVG/pluto.svg'
import Astronaut from '../SVG/Astronaut.svg'
import IntroTop from './Intro/IntroTop'
import IntroBottom from './Intro/IntroBottom'
import AboutMe from './AboutMe'

import Skills from './Skills'
import ImageGallery from './Work/ImageGallery'
import Form from './Form/Form'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



//functional component
const ParallaxEffect = () => {
    // eslint-disable-next-line
    let parallax;
  return (

    <Page>
    <Parallax className="layer" pages={7} ref={ref => parallax = ref}>

      {/* background color */}
      <ParallaxLayer offset={0} factor={7} style={{ background: 'linear-gradient(180deg, rgba(12,0,35,1) 28%, rgba(17,39,101,1) 69%, rgba(99,27,135,1) 100%)', backgroundSize: 'cover'  }} />
      
      <ParallaxLayer offset={0} factor={6} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />
      <ParallaxLayer offset={0} speed={0.3} factor={3} style={{ backgroundImage: `url(${LandingPageBiggerStars})`, backgroundSize: 'cover' }} />
      
      {/* <ParallaxLayer offset={1.9} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} /> */}

    <FlexDiv>

      <Planets>
        <ParallaxLayer offset={0} 
                       speed={0.8}>
            <img
          style={{width:'20%', marginLeft: '-3%'}}  
          src={TheSun} 
          alt="Sun" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} 
                       speed={2.7}>
            <img
          style={{width:'20%', marginLeft: '70%', marginTop:'10%'}}  
          src={Venus} 
          alt="Venus" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.6} 
                       speed={0.5}
                       >
            <img
          style={{width:'3%', marginLeft: '30%'}}  
          src={Mercury} 
          alt="Mercury" />
        </ParallaxLayer>

      
        <ParallaxLayer offset={1.8} 
                       speed={3}>
          <span>
            <img
          style={{marginLeft: '25%', width:'20%'}}  
          src={Jupiter} 
          alt="Jupiter" />
          </span>
        </ParallaxLayer>
      
        <ParallaxLayer speed={0.7} 
                       offset={1}>
          <span>
              <img
            style={{width:'8%', marginLeft: '10%', marginTop:'10%'}}  
            src={Saturn} 
            alt="Saturn" />
            </span>
        </ParallaxLayer>
     
        <ParallaxLayer speed={3} 
                       offset={1}>
          
              <img
            style={{width:'30%', marginLeft: '60%', marginTop:'-10%'}}  
            src={Mars} 
            alt="Mars" />
        </ParallaxLayer>

      
        <ParallaxLayer offset={0.95} 
                       speed={3}>
          <img
          style={{width:'45%', marginTop:'20%', marginLeft: '25%'}}  
          src={Earth} 
          alt="Earth" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} 
                       speed={3}>
          <img
          style={{width:'13%', marginTop:'5%', marginLeft: '17%'}}  
          src={Satellite} 
          alt="Satellite" />
        </ParallaxLayer>

        <ParallaxLayer offset={0.95} 
                       speed={3}>
          <img
          style={{width:'10%', marginTop:'3%', marginLeft: '85%'}}  
          src={Moon} 
          alt="Moon" />
        </ParallaxLayer>
      
       
        <ParallaxLayer offset={1.9} 
                       speed={2}>
          <img
          style={{width:'10%', marginTop:'20%', marginLeft: '80%'}}  
          src={Neptune} 
          alt="Neptune" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} 
                       speed={1.3}>
          <img
          style={{width:'10%', marginTop:'40%', marginLeft: '5%'}}  
          src={Uranus} 
          alt="Uranus" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.9} 
                       speed={1.3}>
          <img
          style={{width:'10%', marginTop:'56%', marginLeft: '85%'}}  
          src={Pluto} 
          alt="Pluto" />
        </ParallaxLayer>

        <ParallaxLayer offset={2} 
                       speed={1.3}>
          <img
          style={{width:'65%', marginTop:'15%', marginLeft: '15%'}}  
          src={Astronaut} 
          alt="Astronaut" />
        </ParallaxLayer>
        
      </Planets>

      
        <Column> 
          <IntroTopContainer>
            <IntroTop /> 
          </IntroTopContainer>
          <IntroBottomContainer>
            <IntroBottom />
          </IntroBottomContainer>
          {/* <AboutMe /> */}
          <ImageGalleryContainer>
            <ImageGallery />
          </ImageGalleryContainer>
          <Skills />

        </Column>  
        

      </FlexDiv>

      <FormDiv>
        
              <AboutMe />
              <Form />
              <Icons>
              <a href="https://www.linkedin.com/in/kss89/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>  
              <a href="https://twitter.com/ksswimmy" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "twitter"]} /></a>  
              <a href="https://github.com/KSSwimmy" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "github"]} /></a>  
              <a href="https://dribbble.com/KSwimmy" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "dribbble"]} /></a>  
              </Icons>
          
        </FormDiv>

      </Parallax>
    </Page>
  );
}

const Page = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column; 
`;

const FlexDiv = styled.div`
width: 100%;
height: 1000px;
display: flex;
flex-direction: row;
`;

const Column = styled.div`
z-index: 101;
display: flex;
flex-direction: column; 
width: 50%;
height: 2500px;
background: linear-gradient(180deg, rgba(0,154,205,0.26514355742296913) 0%, rgba(45,0,101,0.3743872549019608) 30%, rgba(9,0,163,0.1923144257703081) 69%, rgba(9,0,163,0) 100%);
`;



const IntroTopContainer = styled.div `
z-index: 2;
margin: 0 auto;
width: 100%;
`;

const Planets = styled.div `
position: relative;
width: 50%;

`;

const IntroBottomContainer = styled.div `
z-index: 1;
width: 100%;
margin: 0 auto;
`;

const ImageGalleryContainer = styled.div`
width: 100%;
z-index: 5;

`;

const FormDiv = styled.div`
position: relative;
z-index: 301;
width: 100%;
margin-top: 265em;
`;

const Icons = styled.div`
color: #DCE3FF;
font-size: 10rem;
width: 700px;
text-align: center;
display: flex;
justify-content: space-between;
text-decoration: none;
margin: 0 auto;
`;
        export default ParallaxEffect;   