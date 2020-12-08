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
background: rgba(12,0,35,1);
padding: 70px;
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
top: 0;
right: 0;
bottom: 0;
left: 0;
transform-origin: top left;
transform: skewY(9deg);
box-shadow: 0px 50px 50px rgba(46, 0, 77, 1);

   }  




`;

const KimDiv = styled.div`
width: 100%;
height: 100px;
font-size: 7rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;
margin: 50px 50px 30px 10px;
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