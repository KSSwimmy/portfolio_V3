import styled from 'styled-components'
import { device } from '../../device'





const IntroTop = () => {
    return (
        <IntroDiv> 
           
                <KimDiv>
                    <KimThree> 
                        KIMBERLY SWINTON'S
                    </KimThree>   
                    
                    <KimTwo> 
                        KIMBERLY SWINTON'S 
                    </KimTwo> 
                        
                    <Kim> 
                        KIMBERLY SWINTON'S 
                    </Kim>
                </KimDiv>


                <Portfolio> 
                    PORTFOLIO
                </Portfolio> 
           
        </IntroDiv>
    )
}



const IntroDiv = styled.div`
background: transparent;
width: 100%;
height: 260px;
text-align: center;
display: flex;
flex-direction: column;
margin: 100px 0 auto;


    @media ${device.iPad} {
        
        height: 25%;
    }

    @media ${device.surfaceDuo} {
        justify-content: space-evenly;
        margin-top: 300px ;
     }
`;

const KimDiv = styled.div`
width: 100%;height: 100px;
font-size: 5.2rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;
margin: 0 auto;

    @media ${device.iPad} {
        font-size: 7rem;
        width: 100%;
        left: -40px;
    }

    @media ${device.surfaceDuo} {
        margin-right: -50px;
        font-size: 4.6rem;
        width: 100%;
        left: -40px;
    }

    

`;

const Kim = styled.h1`
width: 100%;
color: #DCE3FF;
position: absolute;
margin: 0 auto;
`;

const KimTwo = styled.h1`
width: 100%;
top: 13px;
left: 15px;
color: #813CD9;
position: absolute;
margin: 0 auto;  
`;

const KimThree = styled.h1`
width: 100%;
top: 24px;
left: 20px;
color: #1E0030;
position: absolute;
margin: 0 auto;
`;

const Portfolio = styled.div`

margin: 0 auto;
padding-top: 30px;
font-size: 5rem;
font-weight: 200;
font-style: italic;
color: #DCE3FF;
font-family: 'Exo 2', sans-serif; 
text-align: center;
width: 100%;

@media ${device.iPad} {
    font-size: 5rem;
    
}

@media ${device.surfaceDuo} {
   margin: 0 auto;
   
   
}

`;


export default IntroTop;