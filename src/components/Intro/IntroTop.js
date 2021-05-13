import styled from 'styled-components'






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
position: relative;
background: transparent;
padding: 40px;
width: 100%;
height: auto;
text-align: center;
display: flex;
flex-direction: column;



`;

const KimDiv = styled.div`
width: 100%;
height: 100px;
font-size: 8rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;

display: flex;
justify-content: space-evenly;
margin-right: 100px;
`

const Kim = styled.h1`
width: 100%;
color: #DCE3FF;
position: absolute;
`;

const KimTwo = styled.h1`
width: 100%;
top: 14px;
left: 15px;
color: #813CD9;
position: absolute;
   
`;

const KimThree = styled.h1`
width: 100%;
top: 25px;
left: 20px;
color: #631B87;
position: absolute;
`;

const Portfolio = styled.h1`
margin-bottom: 30px;
margin-top: 30px;
font-size: 7rem;
font-weight: 200;
font-style: italic;
color: #DCE3FF;
font-family: 'Exo 2', sans-serif;
   
`;


export default IntroTop;