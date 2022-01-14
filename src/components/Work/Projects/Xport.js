import styled from 'styled-components'
import Xport from '../../../Portfolio_v3_images/xport.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from  '../../../device'


const Xprot = () => {
    return (
        <Container>
            <Title>Xport</Title>
        <ProjectContainer>
            <ProjectDisplay>
                <img style={{width:'100%'}} src={Xport} alt="Xport" />
                <Icons>
                    <a href="https://admiring-euclid-0a6402.netlify.app/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon="link"/></a>
                    <a href="https://github.com/event-planner-bw-lamda-school/event-planner-UI" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "github"]} /></a>
                </Icons>
            </ProjectDisplay>

            <DescriptionContainer1>

                <AboutThisProjectContainer>
                    <AboutThisProject>ABOUT THIS PROJECT</AboutThisProject>
                    <Par>This app keeps track of all corporate event planning details! There are so many details and people to coordinate with. This app helps solve these problems. </Par>
                </AboutThisProjectContainer>

                <MyroleContainer>
                    <Myrole>MY ROLE</Myrole>
                    <Unordered2>
                        <List>User Interface Developer</List>
                        <List>User Interface Designer</List>
                    </Unordered2>
                </MyroleContainer>

                <SoftwareUsedContainer>
                    <SoftwareUsed>TECH STACK</SoftwareUsed>
                    <Unordered>
                        <List>JavaScript</List>
                        <List>HTML5</List>
                        <List>CSS 3</List>
                        <List>Adobe Illustrator (For UI creation)</List>
                    </Unordered>
                </SoftwareUsedContainer>
            </DescriptionContainer1> 
            
        </ProjectContainer>
            
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
text-align: center;
margin: 0 auto;
`;

const ProjectContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
margin-top: 55px;

    @media ${device.iPad} {
        flex-direction: column;
        margin: 0 auto;
        width: 100%;

    }
`;

const Title = styled.h1`
font-weight: 900;
color: #DCE3FF;
font-size: 5rem;
text-align: center;
padding-bottom: 5px;
border-bottom: solid #DCE3FF;
border-width: thin; 
text-align: center;

    @media ${device.iPad} {
        margin: 0 auto;
        width: 100%;
        
        
    }
`;

const ProjectDisplay = styled.div`
width: 50%;
height: auto;
padding: 50px;
border-right: solid #DCE3FF;
border-width: thin;

    @media ${device.iPad} {
        margin: 50px 0 auto;
        padding: 0;
        width: 100%;
        border: none;

    }
`;

const AboutThisProjectContainer = styled.div`
font-size: 2rem;
color: #DCE3FF;
text-align: left;
font-family: 'Open Sans', sans-serif;
font-weight: lighter;

    @media ${device.iPad} {
        width:100% ;
        text-align: center;
        margin: 0 auto;
    }
`;

const Par = styled.p`
margin: 40px; 
font-size: 2rem;
color: #DCE3FF;
font-family: 'Open Sans', sans-serif;
font-weight: lighter;
line-height: 1.5;
`;

const AboutThisProject = styled.h3`
text-align: center;
font-weight: 900;
font-size: 2rem;
margin-bottom: 50px;
`;

const Icons = styled.div`
color: #DCE3FF;
font-size: 10rem;
width: 400px;
text-align: center;
margin: 0 auto;
display: flex;
justify-content: space-between;
margin-top: 100px;
text-decoration: none;

    @media ${device.iPad} {
        font-size: 7rem;
        text-align: center;
        display: flex;
        justify-content: space-around;
        width: 60%;
        margin: 0 auto;
        padding: 40px;

    }
`;

const MyroleContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;

@media ${device.iPad} {
    width:100% ;
    text-align: center;
    margin: 0 auto;
}
`;

const Myrole = styled.h3`
text-align: center;
font-weight: 900;
font-size: 2rem;
margin-bottom: 30px;
`

const Unordered = styled.ul`
font-size: 2rem;
color: #DCE3FF;
font-family: 'Open Sans', sans-serif;
font-weight: lighter;
text-align: center;
margin-bottom: 50px;
`;

const Unordered2 = styled.ul`
font-size: 2rem;
color: #DCE3FF;
font-family: 'Open Sans', sans-serif;
font-weight: lighter;
text-align: center;
margin-bottom: 50px;
`;

const List = styled.li`
margin: 20px;
`;

const SoftwareUsed = styled.h3`
text-align: center;
font-weight: 900;
font-size: 2rem;
margin-bottom: 20px;
`;

const DescriptionContainer1 = styled.div`
display: flex;
flex-direction: column;
width: 50%;

    @media ${device.iPad} {
        margin: 0 auto;
        width: 100%;
    }
`;

const SoftwareUsedContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;

`;


export default Xprot;