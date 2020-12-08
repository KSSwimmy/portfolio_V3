import styled from 'styled-components'
import Stars from '../../SVG/TopNameStars.svg'





const Intro = () => {
    return (
        <IntroDiv> 
           <IntroDivContainer>
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
width: 100%;
height: 100px;
font-size: 8rem;
font-weight: bold;
font-family: 'Exo 2', sans-serif;
text-align: center;
position: relative;
margin: 50px 50px 30px 50px;
`

const Kim = styled.h1`
margin: 0px;
color: #DCE3FF;
position: absolute;
`;

const KimTwo = styled.h1`
margin: 13px 0px 0px 5px;
color: #813CD9;
position: absolute;
   
`;

const KimThree = styled.h1`
margin: 26px 0px 0px 20px;
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


export default Intro;