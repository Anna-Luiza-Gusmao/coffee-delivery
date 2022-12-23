import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 0rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
`

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 0.5rem; 
    border-radius: 8px;
    
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