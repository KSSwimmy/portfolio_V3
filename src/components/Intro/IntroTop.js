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
width: 97%;
height: auto;
text-align: center;
display: flex;
flex-direction: column;
margin: 40px 0 auto;
`;

const KimDiv = styled.div`
width: 85%;
height: 100px;
font-size: 8rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;
margin: 0 auto;
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

const Portfolio = styled.h1`
margin: 0 auto 30px;
padding-top: 30px;
font-size: 7rem;
font-weight: 200;
font-style: italic;
color: #DCE3FF;
font-family: 'Exo 2', sans-serif;  
`;


export default IntroTop;