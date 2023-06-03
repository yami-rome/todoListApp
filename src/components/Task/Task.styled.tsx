import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 25%;
        align-items: center;
        justify-content: space-evenly;
    }
`

export const Card = styled.div`
  width: 96%;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px grey;
  padding: 10px;
`

export const ContentCard = styled.div`
     text-align: start;  
`

export const LabelCard = styled.label`
   font-size: 16px;
   
`
export const ValueLabelCard = styled.p`
   color: rgba(0, 0, 0, 0.6); 
   font-size: 16px;
   padding-left: 5px;
   margin: 10px;
`

export const GroupButtonsCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    border: 1px solid #ffffff;
    width: auto;
    height: 60px;
`
export const ButtonCard = styled.button`
    background: none;
`

export const HeadCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  
`

export const SelectCard = styled.select`
    width: auto;
    font-size: 16px;
    border: none;
    cursor: pointer;
    text-decoration: none;
    margin: 10px 0px 10px 0px;
    text-align: start; 
    padding: 0px 0px 0px 3px;
    background: none;
    color: rgba(0, 0, 0, 0.6); 
    option {
      background-color: #e6ecf3;
      border: none;
    }
    
    &:focus {
        outline: none;
        border-bottom-color: #007FFF;
    }

`
export const ButtonHeaderCard = css`
  display: flex;
  width: auto;
  height: 20px;
  align-items: center;
  border: 1px solid #ffffff;
  background: none;

  i{
    border-color: red;
  }
 `

export const MinimizedButtonCard = styled.button`
  ${ButtonHeaderCard}
`

export const MaximizedButtonCard = styled.button`
   ${ButtonHeaderCard}
`


