import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    padding: 2rem 0rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem; 
    border-radius: 8px;
    height: 38px;
    
    background-color: ${props => props.theme['purple-100']};
`

export const LocationText = styled.p`
    color: ${props => props.theme['purple-500']};
    padding-left: 0.25rem;
`

export const CartButton = styled.div`
    border: none;
    border-radius: 8px;

    display: flex;
    margin-left: 0.75rem;
    padding: 0.5rem;

    background-color: ${props => props.theme['yellow-100']};
`

export const AmountCoffee = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    position: relative;
    width: 20px;
    height: 20px;
    right: -34px;
    top: 12px;

    background-color: ${props => props.theme['yellow-500']};
    border-radius: 1000px;
    color: #FFF;

    flex: none;
    order: 1;
    flex-grow: 0;
    z-index: 1;
`