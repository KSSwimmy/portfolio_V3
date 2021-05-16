import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import { device } from './../device'
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
import IntroTop from './Intro/IntroTop'
import IntroBottom from './Intro/IntroBottom'
import AboutMe from './AboutMe'
import Skills from './Skills'
import ImageGallery from './Work/ImageGallery'
import Form from './Form/Form'
import styled from 'styled-components'



//functional component
const ParallaxEffect = () => {
    // eslint-disable-next-line
    let parallax;
  return (

    <Page>
    <Parallax className="layer" pages={12} ref={ref => parallax = ref}>

      {/* background color */}
      <ParallaxLayer offset={0} factor={12} style={{ background: 'linear-gradient(180deg, rgba(12,0,35,1) 28%, rgba(17,39,101,1) 69%, rgba(99,27,135,1) 100%)', backgroundSize: 'cover'  }} />
      
      <ParallaxLayer offset={0} factor={7} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />
      <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: `url(${LandingPageBiggerStars})`, backgroundSize: 'cover' }} />
      
      {/* <ParallaxLayer offset={1.9} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} /> */}



      <Planets>

      


        <ParallaxLayer offset={0} 
                       >
            <img
          style={{width:'20%', marginLeft: '-3%', marginTop:'20%'}}  
          src={TheSun} 
          alt="Sun" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} 
                       >
            <img
          style={{width:'20%', marginLeft: '78%', marginTop:'30%'}}  
          src={Venus} 
          alt="Venus" />
        </ParallaxLayer>

        

        <ParallaxLayer offset={0.6} 
                       >
            <img
          style={{width:'3%', marginLeft: '30%'}}  
          src={Mercury} 
          alt="Mercury" />
        </ParallaxLayer>

      
        <ParallaxLayer offset={2.2} 
                       >
          <span>
            <img
          style={{marginLeft: '10%', width:'20%', marginTop:'-10px'}}  
          src={Jupiter} 
          alt="Jupiter" />
          </span>
        </ParallaxLayer>
      
        <ParallaxLayer  offset={1}>
                       
          <span>
              <img
            style={{width:'9%', marginLeft: '10%', marginTop:'2%'}}  
            src={Saturn} 
            alt="Saturn" />
            </span>
        </ParallaxLayer>
     
        <ParallaxLayer offset={1}>
                       
          
              <img
            style={{width:'30%', marginLeft: '60%', marginTop:'-50%'}}  
            src={Mars} 
            alt="Mars" />
        </ParallaxLayer>

      
        <ParallaxLayer offset={1.2}> 
                       
          <img
          style={{width:'45%', marginTop:'20%', marginLeft: '25%'}}  
          src={Earth} 
          alt="Earth" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} 
                       >
          <img
          style={{width:'13%', marginTop:'5%', marginLeft: '17%'}}  
          src={Satellite} 
          alt="Satellite" />
        </ParallaxLayer>

        <ParallaxLayer offset={1.2} 
                       >
          <img
          style={{width:'10%', marginTop:'3%', marginLeft: '85%'}}  
          src={Moon} 
          alt="Moon" />
        </ParallaxLayer>
      
       
        <ParallaxLayer offset={1.9} 
                       >
          <img
          style={{width:'10%', marginTop:'20%', marginLeft: '80%'}}  
          src={Neptune} 
          alt="Neptune" />
        </ParallaxLayer>

        <ParallaxLayer offset={3.9} 
                       >
          <img
          style={{width:'10%', marginTop:'40%', marginLeft: '5%'}}  
          src={Uranus} 
          alt="Uranus" />
        </ParallaxLayer>

        <ParallaxLayer offset={4.5} 
                       >
          <img
          style={{width:'10%', marginTop:'56%', marginLeft: '85%'}}  
          src={Pluto} 
          alt="Pluto" />
        </ParallaxLayer>
        
      </Planets>

      
      <Column>
    
       
              <IntroTop /> 
         
            <MarginDiv>
          
            
              <IntroBottom />
           
         

          
              
                <ImageGallery />
             
        

          
           
              <Skills />
           
         

          
            <AboutMe />
          

            
              <Form />
            

          </MarginDiv>
       
        </Column>    
        

      </Parallax>
    </Page>
  );
}

const Page = styled.div`
  @media ${device.iPad} {
    width:100% ;
    margin: 0 auto;
    height: 100vh;
  }
`;

const MarginDiv = styled.div`
@media ${device.iPad} {
  Margin-top: 150em;
}


`

const Column = styled.div`
position: relative;
z-index: 101;
display: flex;
flex-direction: column; 
width: 100%;
height: auto;
//background: linear-gradient(180deg, rgba(0,154,205,0.26514355742296913) 0%, rgba(45,0,101,0.3743872549019608) 30%, rgba(9,0,163,0.1923144257703081) 69%, rgba(9,0,163,0) 100%);
  

    

`;



const IntroTopContainer = styled.div `
z-index: 2;
margin: 0 auto;
width: 100%;

`;

const Planets = styled.div `
position: relative;
width: 100%;


`;

const SkillContainer = styled.div`
margin: 0 auto;
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
@media ${device.mobileL} {
  margin-top: 200em;
}


`

        export default ParallaxEffect;   