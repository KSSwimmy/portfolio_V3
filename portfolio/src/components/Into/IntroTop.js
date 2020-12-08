import styled from 'styled-components'
import Stars from '../../SVG/TopNameStars.svg'





const IntroTop = () => {
    return (
        <IntroDiv> 
           <IntroDivContainer>
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
justify-content: space-evenly;
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
transform-origin: top left;
transform: skewY(9deg);

}  


`;

const IntroDiv = styled.div`
position: relative;
background: linear-gradient(90deg, rgba(137,52,236,1) 0%, rgba(99,27,135,1) 40%);
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
max-width: 100%;
height: 100px;
font-size: 7rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;
margin: 50px 50px 30px 50px;
display: flex;
justify-content: space-evenly;
`

const Kim = styled.h1`
color: #DCE3FF;
position: absolute;
`;

const KimTwo = styled.h1`
top: 14px;
left: 50px;
color: #813CD9;
position: absolute;
   
`;

const KimThree = styled.h1`
top: 30px;
left: 56px;
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