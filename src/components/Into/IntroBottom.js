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
background: #1E0030;
width: 100%;
height: auto;
display: flex;
flex-direction: column;
text-align: left;
padding: 30px;

box-sizing: border-box;

&:after {
position: absolute;
width: 100%;
height: 100%;
content: '';
background: inherit;
z-index: -1;
top: 20px;
right: 0;
bottom: 0;
left: 0;
transform-origin: top right;
transform: skewY(-9deg);
box-shadow: 0px 50px 50px 0px rgba(17,39,101,1);

   }  


`;

const JobTitleContainer = styled.div`
width: 100%;
height: auto;
font-size: 4rem;
font-weight: extra-light;
font-family: 'Exo 2', sans-serif;
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