import styled from 'styled-components'





const Intro = () => {
    return (
        <IntroDiv>  
        <KimDiv>
            <KimThree> 
                KIMBERLY SWINTON's
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
width: 100%;
height: 1000px;
background: rgba(12,0,35,1);
text-align: center;
`;

const KimDiv = styled.div`
font-size: 8rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;

`

const Kim = styled.h1`
  top: 37px;
  left: 46px;
  color: #DCE3FF;
  
`;

const KimTwo = styled.h1`

  top: 40px;
  left: 50px;
  color: #813CD9
  
   
`;

const KimThree = styled.h1`

  top: 46px;
  left: 55px;
  color: #17135D
  
   
`;

const Portfolio = styled.h1`

  top: 100px;
  left: 145px;
  font-size: 5rem;
  font-weight: 200;
  font-style: italic;
  color: #DCE3FF;
  font-family: 'Exo 2', sans-serif;
   
`;


export default Intro;