import ReUsableModal from './ReUsableModal'
import styled, { ThemeProvider } from 'styled-components'
import React, { useState } from 'react'
import Bookr from './Projects/Bookr.js'
import { data } from './data.js'


const ImageGallery = () => {
    const modalRef = React.useRef();
    const dataRef = React.useRef()

    const openModal = (data) => {
        modalRef.current.openModal(data)  
    }

    const modalContent = [
        {
            content: 'First',
            style: {
                main: "linear-gradient(115deg, rgba(252,255,0,1) 0%, rgba(255,184,0,1) 54%, rgba(242,118,0,1) 100%);"
            }
        },
        {
            content: 'Second',
            style: {
                main: "linear-gradient(-35deg, rgba(158,221,0,1) 0%, rgba(0,117,52,1) 49%, rgba(1,4,0,1) 100%)"
            }
        },
        {
            content: 'Third',
            style: {
                main: "linear-gradient(-144deg, rgba(85,0,193,1) 0%, rgba(99,27,135,1) 49%, rgba(30,0,48,1) 100%)"
            }
        },
        {
            content: 'Fourth',
            style: {
                main: "linear-gradient(-144deg, rgba(255,17,17,1) 0%, rgba(171,0,0,1) 49%, rgba(94,0,0,1) 100%)"
            }
        }
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

        <ThemeProvider theme={theme}>
            <OpenModalContainer>
                {modalContent.map((eachModalData, index) => (
                    <BookrWrapper key={index}>
                        <Button theme={eachModalData.style}  onClick={() => openModal(data[index])}>
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

`;

const OpenModalContainer = styled.div`
padding-top: 50px;
padding-bottom: 100px;
font-weight: lighter:
width: 100%;
height: auto;
display: flex;
justify-content: space-evenly;
`;

const WorkBorderDiv = styled.div`
text-align: center;
width: 300px;
margin: 0 auto;
`;

const Work = styled.h1`
font-weight: 900;
margin-bottom: 0px;
color: #DCE3FF;
font-size: 6rem;
text-align: center;
`;

const OpenModal = styled.div`
background: rgb(22,0,57);
text-align: center;

`;

const Button = styled.button`
border-radius: 30px;
border: none;
margin: 0;
text-decoration: none;
cursor: pointer;
text-align: center;
background: ${props => props.theme.main};
height: 200px;
width: 200px;
`;

const theme = {
    main: "linear-gradient(115deg, rgba(252,255,0,1) 0%, rgba(255,184,0,1) 54%, rgba(242,118,0,1) 100%);"
}




export default ImageGallery;
