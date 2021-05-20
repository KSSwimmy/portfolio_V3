import styled from 'styled-components'
import OriImg from '../../../Portfolio_v3_images/ori.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from  '../../../device'


const Ori = () => {
    return (
        <Container>
            <Title>ORI'S GALAXY QUEST</Title>
        <ProjectContainer>
            <ProjectDisplay>
                <img style={{width:'100%'}} src={OriImg} alt="Ori's Galaxy Quest" />
                <Icons>
                <a href="https://cocky-davinci-344c63.netlify.com/" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon="link"/></a>
                <a href="https://github.com/BW-BookR-2019/BE" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "github"]} /></a>
                </Icons>
            </ProjectDisplay>

            <DescriptionContainer1>

                <AboutThisProjectContainer>
                    <AboutThisProject>ABOUT THIS PROJECT</AboutThisProject>
                    <Par>For our CS Build Week, built an interactive Multi-User Dungeon (MUD) client and server in groups. To succeed with this project, We applied knowledge we've learned throughout the first part of CS (Computer Science) to the project. <Par></Par> This project was like a real-world job assignment with our instructor as the client. </Par>
                </AboutThisProjectContainer>

                <MyroleContainer>
                    <Myrole>MY ROLE</Myrole>
                    <Unordered2>
                        <List>Backend Engineer</List>
                        <List>Frontend Engineer</List>
                        <List>User Interface Designer</List>
                    </Unordered2>
                </MyroleContainer>

                <SoftwareUsedContainer>
                    <SoftwareUsed>TECH STACK</SoftwareUsed>
                    <Unordered>
                        <List>React.js</List>
                        <List>Python</List>
                        <List>Hibernate</List>
                        <List>Django</List>
                        <List>Postman</List>
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
font-size: 7rem;
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
font-size: 3.5rem;
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
font-size: 3.5rem;
color: #DCE3FF;
font-family: 'Open Sans', sans-serif;
font-weight: lighter;
`;

const AboutThisProject = styled.h3`
text-align: center;
font-weight: 900;
font-size: 3.5rem;
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
font-size: 3.5rem;
margin-bottom: 30px;
`

const Unordered = styled.ul`
font-size: 3.5rem;
color: #DCE3FF;
font-family: 'Open Sans', sans-serif;
font-weight: lighter;
text-align: center;
margin-bottom: 50px;
`;

const Unordered2 = styled.ul`
font-size: 3.5rem;
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
font-size: 3rem;
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


export default Ori;