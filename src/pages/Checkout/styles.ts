import styled from "styled-components"

export const Container = styled.main`
    display: flex;

    margin-top: 2rem;
`

export const TitleContainers = styled.p`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme['gray-400']};

    margin-bottom: 0.938rem;
`