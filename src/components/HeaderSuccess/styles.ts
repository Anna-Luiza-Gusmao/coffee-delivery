import styled from "styled-components"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    padding: 2rem 0rem;
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