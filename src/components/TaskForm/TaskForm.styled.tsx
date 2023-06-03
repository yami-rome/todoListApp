import styled, { css } from 'styled-components'

export const Form = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid black;
    text-align: left;
    padding: 10px;
    border-color: rgb(231, 235, 240);
    border-width: 1px;
    border-style: solid;
    border-radius: 10px;
  
    @media(width: 1024px){
        width: 100%;

    }

`
export const TitleForm = styled.title``

export const GroupButtonsForm = styled.div`
    display: flex;
    font-size: 14px;
    cursor: pointer;
    flex-direction: row;
    justify-content: space-evenly;
`


export const styleBaseButton = css`
    display: flex;
    width: auto;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: none;
    border: none;
    padding: 10px;
    font-size: 14px;
    cursor: pointer;
    color: #ffffff;
    font-style: bold;
    text-transform: uppercase;
   
`

export const Icon = styled.i`
    padding-left: 10px;
`

export const PrimaryButton = styled.button`
    ${styleBaseButton}
    background-color: #1976D2;
`


export const DefaultButton = styled.button`
    ${styleBaseButton}
    background-color: #625c5c;
`

export const SecondaryButton = styled.button`
    ${styleBaseButton}
    background-color: #d32f2f;
`

export const LabelForm = styled.label`
    text-align: left;
    font-size: 16px;
    width: 100%;
`

export const HeaderForm = styled.div`
`


export const inputStyled = css`
    margin-bottom: 10px;
    width: 100%;
    color: rgba(0, 0, 0, 0.87);
    padding: 6px 16px;
    font-size: 16px;
    min-width: 64px;
    box-sizing: border-box;
    min-height: 36px;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    outline: 0;
    cursor: pointer;
    user-select: none;
    background: none;
    &:focus {
        border-left: 0;
        border-right: 0;
        border-top: 0;
        outline: none;
        border-bottom: 1px solid;
        border-bottom-color: #007FFF;
        
    }
`

export const SelectForm = styled.select`
    ${inputStyled}
    
`

export const InputForm = styled.input`  
 ${inputStyled}
`