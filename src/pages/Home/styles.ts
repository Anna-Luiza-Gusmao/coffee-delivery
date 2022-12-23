import styled from "styled-components"

export const DescriptionContainer = styled.div`
    padding: 5.875rem 0;

    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
    color: ${props => props.theme['gray-800']};

    padding-bottom: 1rem;
`

export const SubTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400; 
    font-size: 1.25rem;
`

export const CharacterContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 0.5rem;

    margin-top: 4.125rem;
`

export const CharacterBox = styled.div`
    display: flex;
    align-items: center;
`

export const CharacterText = styled.p`
    color: ${props => props.theme['gray-300']};
    padding: 0.75rem;
`

export const TitleMain = styled.h2`
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;

    color: ${props => props.theme['gray-400']};
`

export const CoffeContainer = styled.div`
    margin-top: 3.375rem;
    margin-bottom: 9.813rem;

    background-color: ${props => props.theme['white-100']};
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;

    width: 256px;
    height: 310px;

    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TitleCoffee = styled.p`
    font-family: 'Baloo 2', cursive;
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['gray-400']};
`

export const DescriptionCoffee = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400; 
    font-size: 0.875rem;
    text-align: center;
    color: ${props => props.theme['gray-200']};

    padding: 0.5rem 1.25rem;
`