import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    margin-top: 4rem;
`

export const Title = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;

    color: ${props => props.theme['yellow-500']};
`

export const SubTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 400;
    color: ${props => props.theme['gray-400']};

    margin-bottom: 2.5rem;
`

export const Card = styled.div`
    border: 2px solid transparent;
    background: linear-gradient(#FAFAFA, #FAFAFA) padding-box, linear-gradient(to right, #DBAC2C, #8047F8) border-box;

    border-radius: 8px 36px;

    padding: 2.5rem;

    display: grid;
    row-gap: 2rem;
`

export const SubCard = styled.section`
    display: flex;
`

export const Description = styled.p`
    color: ${props => props.theme['gray-300']};
`