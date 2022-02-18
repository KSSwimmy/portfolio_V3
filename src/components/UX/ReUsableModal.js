import React, { forwardRef, useImperativeHandle } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { device } from '../../device'




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
z-index: 200;
padding: 40px;

@media ${device.iPadAir} {
    top: 13%;
    height: 700px;

};

@media ${device.iPhone678Plus} {
    top: 28.5%;
    height: 500px;

};

@media ${device.iPhone12Pro} {
    top: 30.5%;
    height: 500px;

};

@media ${device.iPhoneX} {
    top: 39%;
    height: 500px;

};
`;


export default ReUsableModal;