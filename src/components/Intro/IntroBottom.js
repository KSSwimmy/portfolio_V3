import styled from 'styled-components'
import Star from '../../SVG/bottomTitleStar3.svg'







const IntroBottom = () => {
    return (
        <IntroDiv>
            <JobTitleContainer>
                <JobTitleOne>

                  Greetings! Nice to see you. 
               </JobTitleOne>

               <JobTitleTwo> 

               I am a UX/UI Designer and Software Engineer. I designed and built this site from scratch! With that being said, you can also call me a UX Engineer. 
                
                </JobTitleTwo> 
            </JobTitleContainer>
        </IntroDiv>
    )
}

const IntroDiv = styled.div`
background: transparent;
width: 100%;
height: 500px;
margin: 0 auto 90px;
display: flex;
flex-direction: column;
color: #DCE3FF;


`;

const JobTitleContainer = styled.div`
width: 100%;
`;

const JobTitleOne = styled.h3`
text-align: left;
font-weight: 900;
margin: 100px 20px 20px 20px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`;

const JobTitleTwo = styled.p`
font-size: 3.5rem;
margin: 30px;
margin-bottom: 100px;
text-align: center;
`;

{/* <IntroDiv> 
           
           <JobTitleContainer>
               <JobTitleOne>
               <img
                       style={{width: '50px', marginRight: '15px'}}  
                       src={Star} 
                       alt="Star" /> 
                  UX ENGINEER
                  <img
                   style={{width: '50px', marginRight: '15px'}}  
                   src={Star} 
                   alt="Star" />  
               </JobTitleOne>   
                   
               <JobTitleThree> 
               <img
                       style={{width: '45px', marginRight: '15px'}}  
                       src={Star} 
                       alt="Star" /> 
                   UI/UX DESIGNER 
                   <img
                   style={{width: '50px', marginRight: '15px'}}  
                   src={Star} 
                   alt="Star" /> 
               </JobTitleThree>
           
           </JobTitleContainer>

           <JobTitleTwo> 
               <img
                   style={{width: '50px', marginRight: '15px'}}  
                   src={Star} 
                   alt="Star" /> 
               SOFTWARE ENGINEER
               <img
                   style={{width: '50px', marginRight: '15px'}}  
                   src={Star} 
                   alt="Star" /> 
           </JobTitleTwo> 
       </IntroDiv>



const IntroDiv = styled.div`
background: transparent;
width: 100%;
height: auto;
margin: auto 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
color: #DCE3FF;
font-size: 2.5rem;
text-align: center;

`;

const JobTitleContainer = styled.div`
width: 100%;

display: flex;
flex-direction: row;
justify-content: space-around;

`;

const JobTitleThree = styled.h3`
text-align: center;

`;

const JobTitleTwo = styled.h3`
text-align: center;
margin-top: 30px ;

`;

const JobTitleOne = styled.h3`
text-align: center;

`;
 */}




export default IntroBottom;