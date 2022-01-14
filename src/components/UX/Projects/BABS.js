import styled from 'styled-components'
import { device } from  '../../../device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Bookr = () => {
    return (
        <Container>
           <Title>BABS </Title>
            <SupTitle>CURRENTLY IN PROGRESS...</SupTitle>
            <FirstP>
                <p> BABS is a beauty supply store finder that is a mobile first app and is also accompanied with a website.  It’s target users are teenage  and young women between the ages of 16 and 60+. Think of this app as a Yelp, but with a more targeted audience and sense of community. BABS will be the goto app for locating beauty supply stores in a new area, reviews, and pricing of products. </p> 
            </FirstP>
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
        
        
    }
`;

const SupTitle = styled.h2`
font-weight: 900;
margin-top: 30px;
margin-bottom: 30px;
color: #DCE3FF;
font-size: 2.5rem;
text-align: center;
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




export default Bookr;