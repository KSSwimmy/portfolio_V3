import ReUsableModal from './ReUsableModal'
import styled, { ThemeProvider } from 'styled-components'
import React, { useState } from 'react'
import { device } from '../../device'

import { data } from './data.js'


const ImageGallery = () => {
    const modalRef = React.useRef();
    

    const openModal = (data) => {
        modalRef.current.openModal(data)  
    }

    const modalContent = [
        {
            content: '',
            style: {
                main: "radial-gradient(circle, rgba(31,195,255,1) 0%, rgba(130,0,255,1) 95%);"
            }
        },
        {
            content: '',
            style: {
                main: "radial-gradient(circle, rgba(31,195,255,1) 0%, rgba(130,0,255,1) 95%);"
            }
        },
        {
            content: '',
            style: {
                main: "radial-gradient(circle, rgba(31,195,255,1) 0%, rgba(130,0,255,1) 95%);"
            }
        },
       
    ];

    const [modalIndex, setModalIndex] = useState(0)

    // Next contnet
    const nextModalContent = () => {
    setModalIndex((prev) => {
      if (prev === modalContent.length - 1) {
        // On the last content modalContent index
        // Close modal and set back to 0
        modalRef.current.hide();
        return 0;
      }
      return prev + 1;
    });
  };


  // Go to previous content //
  const prevModalContent = () => {
    setModalIndex((prev) => {
      if (prev === 0) {
        // If on first modalContent then stay on first
        return 0;
      }
      return prev - 1;
    });
  };

  // *optional*
  // if the modal is closed by clicking the backdrop then set the index back to 0
  // to show first content again
  const handleModalClose = () => {
    setModalIndex(0);
  };
    
    

    return(
        <OpenModal>
        
            <WorkBorderDiv 
                style={{
                borderBottomStyle: 'solid',
                borderBottomColor: '#DCE3FF', 
                borderWidth: 'thin'}}>
                <Work>WORK</Work>
            </WorkBorderDiv>
            <SubtDiv>SOFTWARE ENGINEERING</SubtDiv>

        <ThemeProvider theme={theme}>
            <OpenModalContainer>
                {modalContent.map((eachModalData, index) => (
                    <BookrWrapper key={index}>
                        <Button theme={eachModalData.style} onClick={() => openModal(data[index])}>
                            {eachModalData.content}
                        </Button>
                        <ReUsableModal ref={modalRef} />
                            {/* <Bookr modalData={data[index]} /> */}
                        {/* </ReUsableModal> */}
                    </BookrWrapper>
                ))}
                

            </OpenModalContainer>
            </ThemeProvider>
        </OpenModal>

        

        
    )
}

const BookrWrapper = styled.div`
width: 100%;
height: auto;

`;

const OpenModalContainer = styled.div`
margin-top: 50px;
margin-bottom: 100px;
height: 500px;
width: 100%;
height: auto;
display: flex;
justify-content: space-around;
`;

const WorkBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`;

const SubtDiv = styled.h2`
font-weight: 900;
margin-top: 30px;
margin-bottom: 30px;
color: #DCE3FF;
font-size: 2.5rem;
text-align: center;

`;

const Work = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 5rem;
text-align: center;
`;

const OpenModal = styled.div`
background: transparent;
text-align: center;
height: 500px;
width: 100%;
`;

const Button = styled.button`
border-radius: 100%;
border: none;
padding: 50px;
text-decoration: none;
cursor: pointer;
text-align: center;
background: ${props => props.theme.main};
height: 100px;
width: 100px;
margin-top: 40px ;
font-size: 2rem;

@media ${device.pixel2XL} {
    margin-top: 10px;
    
 }

`;

const theme = {
    main: "linear-gradient(115deg, rgba(252,255,0,1) 0%, rgba(255,184,0,1) 54%, rgba(242,118,0,1) 100%);"
}




export default ImageGallery;
