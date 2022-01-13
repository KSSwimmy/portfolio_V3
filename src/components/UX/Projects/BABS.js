import styled from 'styled-components'
import { device } from  '../../../device'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Bookr = () => {
    return (
        <Container>
           
           <Title>In Progress...</Title>
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




export default Bookr;