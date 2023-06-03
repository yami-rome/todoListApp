import styled from 'styled-components'

export const BackDropModalShadow = styled.div<{isOpen: boolean}>`
    display: flex;
    opacity: ${props => props.isOpen ? '1' : '0'};
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(0,0,0,0.3);
    height: 100vh;
    width: 100%;
    margin: 0px;
    top: 0;
    left: 0;
    z-index: 999;
    transition: opacity .2s ease-in;
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 5%;
    background: #eeeeee;
    box-shadow: 1px 1px 5px grey;
    max-height: 90%;
    border-radius: 4px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 600px) {
        width: 50%;
        margin: 25%;
    }
`

export const ModalHeader = styled.div`
   padding: 10px;
`

export const ModalContent = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 80vh;
    width: 100%;
    margin: 0%;
`

export const ModalCloseButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: end;
    background: none;
    border: none;
    font-size: 25px;
    color:#bbb;
    cursor: pointer;
    font-weight: lighter;
    &:before {
        content: "✖";
    }
    
`

export const CenterText = styled.div`
    text-align: center;
    padding: 10px;
`

export const Title = styled.h1`
    font-size: 18px;
    text-align: center;
    color: #445;
    padding: 0px;
    margin: 0px;
`

export const Text = styled.div`
     font-size: 16px;
`

export const ModalIcon =styled.div`
   font-size: 25px;

    

`
