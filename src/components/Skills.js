import styled from 'styled-components'
import Arrow from '../SVG/arrow.svg'
import Ai from '../SVG/Ai.svg'
import Ae from '../SVG/Ae.svg'
import Ps from '../SVG/Ps.svg'
import Xd from '../SVG/Xd.svg'
import { device } from '../device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Skills = () => {
    
  return (
    <Page>
            
            <CenteredContainer>
                
                    <SkillsBorderDiv 
                        style={{borderBottomStyle: 'solid',
                        borderBottomColor: '#DCE3FF', borderWidth: 'thin'}}>
                        <SkillsDiv>SKILLS</SkillsDiv>
                    </SkillsBorderDiv>
                    <SubtDiv>MY DEVELOPMENT PROCESS</SubtDiv>

                    <CircleDiv>
                    <Circles>
                        <CircleText>
                        <NumberDiv>1</NumberDiv> 
                        <Sub>Concept</Sub>
                        </CircleText>
                    </Circles>

                    <ArrowSpan>
                        <img
                        style={{width:'4%'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </ArrowSpan>

                    <Circles>
                        <CircleText>
                        <NumberDiv>2</NumberDiv> 
                        <Sub>Design</Sub>
                        </CircleText>
                    </Circles>

                    <ArrowSpan>
                        <img
                        style={{width:'4%'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </ArrowSpan>

                    <Circles>
                        <CircleText>
                        <NumberDiv>3</NumberDiv> 
                        <Sub>Code</Sub>
                        </CircleText>
                    </Circles>

                    <ArrowSpan>
                        <img
                        style={{width:'4%'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </ArrowSpan>

                    <Circles>
                        <CircleText>
                        <NumberDiv>4</NumberDiv> 
                        <Sub>Nap</Sub>
                        </CircleText>
                    </Circles>

                    <ArrowSpan>
                        <img
                        style={{width:'4%'}}  
                        src={Arrow} 
                        alt="Arrow" />
                    </ArrowSpan>

                    <Circles>
                        <CircleText>
                        <NumberDiv>5</NumberDiv> 
                        <Sub>Repeat</Sub>
                        </CircleText>
                    </Circles>
                </CircleDiv >
            </CenteredContainer>

            <SkillDesripContainer>
                <PL>
                    <Ht>PROGRAMMING LANGUAGES</Ht>
                    <Icons>
                        <FontAwesomeIcon icon={['fab', 'html5']} />
                        <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                        <FontAwesomeIcon icon={['fab', 'java']} />
                        <FontAwesomeIcon icon={['fab', 'js']} />
                        <FontAwesomeIcon icon={['fab', 'python']} />
                    </Icons>
                </PL>
                
                <DS>
                    <Ht>DESIGN SOFTWARE</Ht>
                        <Icons>
                        <img
                        style={{width: '17%'}} 
                        src={Ai} 
                        alt="Adobe Illustrator" />

                        <img
                        style={{width: '17%'}} 
                        src={Ps} 
                        alt="Adobe PhotoshopReading: Accessibility considerations for color" />

                        <img
                        style={{width: '17%'}} 
                        src={Ae} 
                        alt="Adobe AfterEffects" />
                        
                        <img
                        style={{width: '17%'}} 
                        src={Xd} 
                        alt="Adobe Xd" />

                        <FontAwesomeIcon icon={['fab', 'figma']} />
                        </Icons>
                </DS>
            </SkillDesripContainer>
            


    </Page>
)}

const Page = styled.div`
width: 100%;
height: auto;
`;

const CenteredContainer = styled.div`
height: 1470px;
width: 100%;
display: flex;
flex-direction: column;


@media ${device.samsungGalaxyS20Ultra.iPhone678Plus} {
    height: 1160px;
    
  }


`;

const TitleContainer = styled.div`
width: 100%;
text-align: center;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
`;

const SubtDiv = styled.h2`
font-weight: 900;
margin-top: 30px;
margin-bottom: 30px;
color: #DCE3FF;
font-size: 2.5rem;
text-align: center;
`;

const CircleDiv = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
margin: 0 auto;
`;

const DS = styled.div`
text-align: center;
width: 100%;
margin: 20px 0 auto;
text-align: center;


`;

const Sub = styled.span`
`;

const SkillsDiv = styled.h1`
font-weight: 900;
margin: 0 auto;
color: #DCE3FF;
font-size: 5rem;
text-align: center;


`;

const SkillsBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`;

const SkillDesripContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin: 0 auto;
width: 100%;

@media ${device.samsungGalaxyS20Ultra} {
    width: 80%; 
    margin-bottom: 270px ;
}
`;

const PL = styled.div`
text-align: center;
width: 100%;
margin: 25px;
margin: 0 auto;
`;

const Icons = styled.span`
font-size: 6rem;
width: 400px;
text-align: center;
margin: 0 auto;
padding-bottom: 30px;
display: flex;
justify-content: space-between;
margin-top: 50px;
color: #DCE3FF;

@media ${device.samsungGalaxyS20Ultra} {
    width: 100%; 
    justify-content: space-evenly;
}

`;

const Ht = styled.h2`
font-weight: 900;
margin: 0 auto;
font-size: 2.5rem;
`;


const ArrowSpan = styled.span`
transform: rotate(90deg); 

@media ${device.samsungGalaxyS20Ultra} {
    margin: 0 auto;
    width: 100%;
  }
`;

const CircleText = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
width: 100%;
`;

const Circles = styled.div`
font-family: 'Exo 2', sans-serif;
width: 155px;
height: 155px;
border-radius: 50%; 
color: #DCE3FF; 
background-color: #1E0030;
font-size: 2.5rem;
font-weight: 900;
display: flex;
flex-direction: column;
text-align: center;
margin: 0 auto;
`;

const NumberDiv = styled.span`
margin-top: 30px;
`;


export default Skills;