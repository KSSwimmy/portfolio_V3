import React, { forwardRef, useImperativeHandle } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../device'


// Carousel Functionality ///////////////////////////////////////////////////

// const [modalIndex, setModalIndex] = useState(0)

//     // Next contnet
//     const nextModalContent = () => {
//     setModalIndex((prev) => {
//       if (prev === modalContent.length - 1) {
//         // On the last content modalContent index
//         // Close modal and set back to 0
//         modalRef.current.hide();
//         return 0;
//       }
//       return prev + 1;
//     });
//   };


//   // Go to previous content //
//   const prevModalContent = () => {
//     setModalIndex((prev) => {
//       if (prev === 0) {
//         // If on first modalContent then stay on first
//         return 0;
//       }
//       return prev - 1;
//     });
//   };

//   // *optional*
//   // if the modal is closed by clicking the backdrop then set the index back to 0
//   // to show first content again
//   const handleModalClose = () => {
//     setModalIndex(0);
//   };
    
 // Modal Functionality //////////////////////////////////////////////////// 

// In order to use a ref in a functional component, forwardRef() must be used. 

const ReUsableModal = forwardRef(
    (modalProps,ref) => {
        const [display, setDisplay] = React.useState(false);
        const [modalData, setModalData] = React.useState({})
    // passing the 'open' and 'close' functionalities to the images. 
        useImperativeHandle(
            ref,
            
            () => {
                return {
                    openModal: (data) => {
                        setModalData(data)
                        open()
                    },
                    close: () => close()
                }
            },
        
        )
    
    
        // open function to set display to true. 
        const open = () => {
            setDisplay(true)
        }
    
        // close function to set display to false
        const close = () => {
            setDisplay(false)
        }
        if (display) {
        return(
            <ModalWrapper>
                <ModalBackdrop onClick={close}/>
                <ModalBox>
                <CloseX onClick={close}>
                    <FontAwesomeIcon icon="times" />  
                </CloseX>
                    {modalData.content}
                    
                </ModalBox>
            </ModalWrapper>
          
       )        
    }

    return null
        
    }
)

const CloseX = styled.button`
font-size: 7rem;
color: #DCE3FF;
font-size: 6rem;
float: right;
display: inline-block;
padding: 2px 5px;
background: transparent;
cursor: pointer;
border: none;
`;

const ModalWrapper = styled.div `
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;
`;

const ModalBackdrop = styled.div `
position: fixed;
padding: 100%;
width: 100%;
height: 100%;
z-index: 100;
background-color: rgba(11,0,29,0.3);
`;

const ModalBox = styled.div `
position: relative;
top: 20%;
left: 50%;
height: auto;
width: 85%;
transform: translate(-50%, -50%);
overflow-y: auto;
border-radius: 20px;
background: rgb(22,0,57);
box-shadow: 0 0 17px rgba(0,0,0,0.30);
z-index: 201;
padding: 40px;
@media ${device.iPadAir} {
    top: 10%;
    height: 700px;

}

@media ${device.iPhone12Pro} {
    top: 29%;
    height: 500px;

}

@media ${device.iPhone678Plus} {
    top: 25.4%;
    

}

@media ${device.iPhoneX} {
    top: 34.4%;
   

}

@media ${device.iPhone12Pro} {
    top: 27.4%;
}




`;


export default ReUsableModal;