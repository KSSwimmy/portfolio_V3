import styled from 'styled-components'
import { device } from  '../../../device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Babs = () => {
    return (
        <Container>
           <Title>BABS </Title>
            <SubTitle>CURRENTLY IN PROGRESS...</SubTitle>
            <FirstP>
                <p> BABS (Beauty App Beauty Supply) is a beauty supply store finder that is a mobile first app and it is also accompanied with a website.  It’s target users are women between the ages of 16 and 60+. Think of this app being similar to Yelp, but with a more targeted audience and sense of community. BABS will be the goto app for locating beauty supply stores in a new area for users, call in orders for pick up, and reviews. </p> 
            </FirstP>
            <Icons>
            <IconContainer>
                <a href="https://www.figma.com/proto/AGiUdiz4UrYUrZN0HBlydE/BABS-Project?node-id=221%3A37&scaling=min-zoom&page-id=221%3A36&starting-point-node-id=221%3A37&show-proto-sidebar=1" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "figma"]} /></a> 
                <SubTitle2>Lo-Fi Prototype</SubTitle2>
            </IconContainer>
            <IconContainer>
            <a href="https://docs.google.com/document/d/1fd5N4CUGtbPPqNpJirQwnUutNMHB7_p2zLWgEhRh5k0/edit?usp=sharing" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fas", "file-alt"]}/></a> 
                <SubTitle2>Case Study Draft Google Doc</SubTitle2>
            </IconContainer>  
            <IconContainer>
                <a href="https://www.figma.com/file/EII5ZmrpASnrW9UDr7aEIu/Case-Study-Layout?node-id=0%3A1" target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={["fab", "figma"]} /></a> 
                <SubTitle2>Case Study Layout</SubTitle2>
            </IconContainer>  
            
            </Icons>

        </Container>


    )
}

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
text-align: center;
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
    };


`;

const SubTitle = styled.h2`
font-weight: 900;
margin-top: 30px;
margin-bottom: 30px;
color: #DCE3FF;
font-size: 2.5rem;
text-align: center;
`;

const SubTitle2 = styled.h2`
font-weight: 900;
margin-top: 30px;
margin-bottom: 30px;
color: #DCE3FF;
font-size: 2.5rem;
text-align: center;

@media ${device.iPhoneX} {
    font-size: 2rem;
};
`;

const FirstP = styled.div`
width: 80%;
margin: 0 auto;
font-family: 'Open Sans', sans-serif;
color: #DCE3FF;
text-align: left;
font-size: 2.6rem ;
margin-bottom: 40px;
line-height: 1.5;
`

const Icons = styled.div`
color: #DCE3FF;
font-size: 7rem;
width: 100%;
text-align: center;
display: flex;
justify-content: space-evenly;
text-decoration: none;
margin: 0 auto;

@media ${device.iPad} {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    
};

@media ${device.iPhoneX} {
    font-size: 5rem;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
};



`;

const IconContainer = styled.div`

`;


export default Babs;