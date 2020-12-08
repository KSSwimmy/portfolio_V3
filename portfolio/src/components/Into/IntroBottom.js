import styled from 'styled-components'
import Stars from '../../SVG/TopNameStars.svg'







const IntroBottom = () => {
    return (
        <IntroDiv> 
           <IntroDivContainer>
                <JobTitleContainer>
                    <JobTitleOne> 
                        UX ENGINEER
                    </JobTitleOne>   
                    
                    <JobTitleTwo> 
                        SOFTWARE ENGINEER
                    </JobTitleTwo> 
                        
                    <JobTitleThree> 
                        UI/UX DESIGNER 
                    </JobTitleThree>
                </JobTitleContainer>
                  
           </IntroDivContainer> 
        </IntroDiv>
    )
}

const IntroDivContainer = styled.div`
position: relative;
background-image: url(${Stars});
background-size: 230%;
width: 100%;
height: auto;
text-align: center;
display: flex;
flex-direction: column;
margin: 0 auto;
box-sizing: border-box;

&:after {
position: absolute;
width: 100%;
height: 100%;
content: '';
background-image: inherit;
z-index: 1;
top: 0;
right: 0;
bottom: 0;
left: 0;
transform-origin: top right;
transform: skewY(9deg);

}  


`;

const IntroDiv = styled.div`
position: relative;
background: linear-gradient(90deg, rgba(16,2,91,1) 0%, rgba(16,42,104,1) 50%, rgba(30,105,170,1) 99%);
width: 100%;
height: auto;
text-align: center;
display: flex;
flex-direction: column;
margin: 0 auto;
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
transform: skewY(-20deg);
box-shadow: 0px 50px 50px rgba(46, 0, 77, 1);

   }  


`;

const JobTitleContainer = styled.div`
width: auto;
height: 100px;
font-size: 6rem;
font-weight: Extra Light;
font-family: 'Exo 2', sans-serif;
margin: 90px 50px 30px 50px;
`

const JobTitleThree = styled.div`
margin: 0px;
color: #DCE3FF;

`;

const JobTitleTwo = styled.div`
margin: 13px 0px 0px 5px;
color: #813CD9;

   
`;

const JobTitleOne = styled.div`
margin: 26px 0px 0px 20px;
color: #17135D;

`;





export default IntroBottom;