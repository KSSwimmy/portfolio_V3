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
import styled from 'styled-components'
import { device } from '../device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



//functional component
const ParallaxEffect = () => {
    // eslint-disable-next-line
    let parallax;
  return (

    
    <Parallax className="layer" pages={3} ref={ref => parallax = ref}>

      {/* background color */}
      <ParallaxLayer offset={0} factor={3} style={{ background: 'linear-gradient(180deg, rgba(12,0,35,1) 28%, rgba(17,39,101,1) 69%, rgba(99,27,135,1) 100%)', backgroundSize: 'cover'  }} />
      
      <ParallaxLayer offset={0} factor={3} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} />
      <ParallaxLayer offset={0} speed={0.3} factor={3} style={{ backgroundImage: `url(${LandingPageBiggerStars})`, backgroundSize: 'cover' }} />
      
      {/* <ParallaxLayer offset={1.9} factor={1} style={{ backgroundImage: `url(${LandingPageStars})`, backgroundSize: 'cover' }} /> */}

   

      
        <ParallaxLayer offset={0} 
                       speed={0.8}>
            <img
          style={{width:'20%', marginLeft: '-3%'}}  
          src={TheSun} 
          alt="Sun" />
        </ParallaxLayer>


        <ParallaxLayer offset={0} 
                       speed={0.8}>
        <Kim> 
            KIMBERLY SWINTON'S PORTFOLIO
        </Kim>
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
            <span>
              <img
            style={{width:'30%', marginLeft: '60%', marginTop:'-10%'}}  
            src={Mars} 
            alt="Mars" />
            </span>
        </ParallaxLayer>

        <ParallaxLayer offset={1} 
                       speed={1}>
        <Kim> 
            IS UNDER CONSTRUCTION 
        </Kim>
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

        <ParallaxLayer offset={2.2} 
                       speed={1}>
        <Kim> 
            CHECK BACK LATER! SEE YOU SOON! 
        </Kim>
        </ParallaxLayer>

        <ParallaxLayer offset={2.7} 
                       speed={1}>
    

        <Icons>
        <a href="https://www.linkedin.com/in/kss89/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "linkedin"]} /></a>  
        <a href="https://twitter.com/ksswimmy" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "twitter"]} /></a>  
        <a href="https://github.com/KSSwimmy" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "github"]} /></a>  
        <a href="https://dribbble.com/KSwimmy" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "dribbble"]} /></a>  
        </Icons>

        </ParallaxLayer>
        
    </Parallax> 

      );
}

const Kim = styled.h1`
width: 100%;
color: #DCE3FF;
font-size: 8rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
margin-top: 15px;

@media ${device.iPad} {
    font-size: 5rem;
  }
`;

const Icons = styled.div`
color: #DCE3FF;
font-size: 10rem;
width: 700px;
text-align: center;
display: flex;
justify-content: space-around;
text-decoration: none;
margin: 0 auto;

@media ${device.iPad} {
    width: 100%;
    font-size: 7rem;
    
}
`;

export default ParallaxEffect; 