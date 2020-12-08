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



//functional component
const ParallaxEffect = () => {
    // eslint-disable-next-line
    let parallax;
  return (

    <Page>
    <Parallax className="layer" pages={5} ref={ref => parallax = ref}>

      {/* background color */}
      <ParallaxLayer offset={0} factor={5} style={{ background: 'linear-gradient(180deg, rgba(12,0,35,1) 28%, rgba(17,39,101,1) 69%, rgba(99,27,135,1) 100%)', backgroundSize: 'cover'  }} />
      
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

        </Parallax>
    </Page>
  );
}

const Page = styled.div`

width: 100%;
max-height: 100vh;

`;

        export default ParallaxEffect;   