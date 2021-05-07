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
margin: 0 auto;




`;

const KimDiv = styled.div`
width: 100%;
height: 100px;
font-size: 7rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;
margin-top: 50px;
display: flex;
justify-content: space-evenly;
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
top: 30px;
left: 29px;
color: #17135D;
position: absolute;
`;

const Portfolio = styled.h1`
margin-bottom: 30px;
font-size: 7rem;
font-weight: 200;
font-style: italic;
color: #DCE3FF;
font-family: 'Exo 2', sans-serif;
   
`;


export default IntroTop;