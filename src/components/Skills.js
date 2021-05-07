import styled from 'styled-components'
import Arrow from '../SVG/arrow.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Skills = () => {
    
  return (
    <Page>
            
            <CenteredContainer>
                <TitleContainer>
                    <SkillsBorderDiv 
                        style={{borderBottomStyle: 'solid',
                        borderBottomColor: '#DCE3FF', borderWidth: 'thin'}}>
                        <SkillsDiv>SKILLS</SkillsDiv>
                    </SkillsBorderDiv>
                    <SubtDiv>MY DEVELOPMENT PROCESS</SubtDiv>

                </TitleContainer>

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

            <SkillDesripContainer style={{borderTopStyle: 'solid',
                                   borderTopColor: '#DCE3FF', borderWidth: 'thin', margin: '50px'}}>
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
                <Serve>
                    <Ht>SERVICES</Ht>
                    <li>Website Development</li>
                    <li>Website Design</li>
                    <li>Logos</li>
                    <li>Corporate Identity</li>
                    <li>Flyers, Brochures, Posters, etc</li>
                </Serve>
            </SkillDesripContainer>
            


    </Page>
)}

const Page = styled.div`
width: 100%;
height: auto;
margin-top: 50px
`
const CenteredContainer = styled.div`
text-align: center;
margin: 0 auto;
width: 100%;
display: flex;
flex-direction: column;

`
const TitleContainer = styled.div`
width: 100%;
text-align: center;
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
 
`
const SubtDiv = styled.h2`
font-weight: 900;
margin-top: 30px;
margin-bottom: 30px;
color: #DCE3FF;
font-size: 3.5rem;
text-align: center;

`
const CircleDiv = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
text-align: center;
margin: 0 auto;
`

const DTP = styled.div`
`

const ArrowSpan = styled.span`
transform: rotate(90deg); 

`
const CircleText = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
width: 100%;
`

const Circles = styled.div`
font-family: 'Exo 2', sans-serif;
width: 200px;
height: 200px;
border-radius: 50%; 
color: #DCE3FF; 
background-color: #1E0030;
font-size: 3.3rem;
font-weight: 900;
display: flex;
flex-direction: column;
text-align: center;
margin: 0 auto;
`

const NumberDiv = styled.span`
margin-top: 30px;
`
const Sub = styled.span`
`

const SkillsDiv = styled.h1`
width: 100%;
font-weight: 900;
margin: 0 auto;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`
const SkillsBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`
const SkillDesripContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const PL = styled.div`
text-align: center;
width: 500px;
margin: 15px;
`
const Icons = styled.span`
font-size: 7rem;
width: 400px;
text-align: center;
margin: 0 auto;
display: flex;
justify-content: space-between;
margin-top: 50px;
`

const Serve = styled.ul`
list-style-type: none;
text-align: center;
margin: 15px;
font-size: 2.2rem;
`
const Ht = styled.h2`
font-weight: 900;
margin: 0 auto;
color: #DCE3FF;
font-size: 3.5rem;
`



export default Skills;