import styled from 'styled-components'
import Star from '../../SVG/bottomTitleStar3.svg'







const IntroBottom = () => {
    return (
        <IntroDiv> 
           
            <JobTitleContainer>
                <JobTitleOne>
                <img
                        style={{width: '9%', marginRight: '15px'}}  
                        src={Star} 
                        alt="Star" /> 
                   UX ENGINEER 
                </JobTitleOne>   
                
                <JobTitleTwo> 
                <img
                        style={{width: '9%', marginRight: '15px'}}  
                        src={Star} 
                        alt="Star" /> 
                    SOFTWARE ENGINEER
                </JobTitleTwo> 
                    
                <JobTitleThree> 
                <img
                        style={{width: '9%', marginRight: '15px'}}  
                        src={Star} 
                        alt="Star" /> 
                    UI/UX DESIGNER 
                </JobTitleThree>
            </JobTitleContainer>
                
          
        </IntroDiv>
    )
}



const IntroDiv = styled.div`
position: relative;
background: transparent;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
text-align: left;
padding: 30px;

`;

const JobTitleContainer = styled.div`
width: 100%;
height: auto;
font-size: 4rem;
font-weight: extra-light;
margin-left: -5px ;
margin-top: 90px;
display: flex;
flex-direction: column; 
`

const JobTitleThree = styled.div`
width: 100%;
margin: 25px 0px 25px 0px;
color: #DCE3FF;
display: flex;
flex-direction: row;
align-items: center;

`;

const JobTitleTwo = styled.div`
width: 100%;
margin: 25px 0px 25px 0px;
color: #DCE3FF;
display: flex;
flex-direction: row;
align-items: center;
   
`;

const JobTitleOne = styled.div`
width: 100%;
margin: 25px 0px 25px 0px;
color: #DCE3FF;
display: flex;
flex-direction: row;
align-items: center;
`;





export default IntroBottom;