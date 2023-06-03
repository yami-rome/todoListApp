import styled from 'styled-components'

export const BackDropLoading = styled.div<{ isOpen: boolean }>`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 100vh;
   position:fixed;
   width: 100%;
   margin: 0;
   top: 0;
   left: 0;
   z-index: 998;
   opacity: ${props => props.isOpen ? '1' : '0'};
   background: rgba(0, 0, 0, 0.5);

   @media(width: 1024px) {
      flex-direction: row;
   }
`

export const Loading = styled.div`
   width: 45px;
   height:45px;
   border-radius: 45px;
   border: 14px solid #007FFF;
   border-top: 16px solid #75eaff;
   animation: spin 1s linear infinite;

   @keyframes spin{
     0% { transform: rotate(0deg)}
     50% { transform: rotate(180deg)}
     100% {transform: rotate(360deg)}
   }
`


export const MessageLoading = styled.div`
    text-align: center;
    font-size: 16px;
    margin-left: 4px;
    color: #000000;
    
`