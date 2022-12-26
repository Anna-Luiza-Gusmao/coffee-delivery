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
    @media (min-width: 768px) and (max-width: 1366px){
        margin-right: 5rem;
    }
`

export const SubTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400; 
    font-size: 1.25rem;

    @media (min-width: 768px) and (max-width: 1366px){
        margin-right: 5rem;
    }
`

export const ImgContainer = styled.img`
    @media (min-width: 768px) and (max-width: 1366px){
        width: 350px;
    }
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

export const TagCoffee = styled.span`
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    padding: 0.25rem 0.75rem;
    background-color: ${props => props.theme['yellow-100']};
    border-radius: 10px;

    font-size: 0.625rem;
    font-weight: 700;
    color: ${props => props.theme['yellow-500']};
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
    margin-bottom: 2rem;
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    
    justify-content: space-evenly;
    width: 256px;
`

export const DollarSign = styled.span`
    font-size: 0.875rem;
    color: ${props => props.theme['gray-300']};
    padding-right: 0.25rem;
`

export const PriceCoffee = styled.span`
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
    color: ${props => props.theme['gray-300']};
`

export const AlterPriceContainer = styled.div`
    display: flex;
    align-items: center;

    padding: 0.25rem;
    border-radius: 8px;
    background-color: ${props => props.theme['white-200']};
`

export const AlterPriceButton = styled.button`
    border: none;
    padding: 0 0.5rem;
    background-color: ${props => props.theme['white-200']};
    color: ${props => props.theme['purple-300']};

    font-size: 1.5rem;
`

export const ButtonCart = styled.button`
    border: none;
    border-radius: 8px;
    padding: 0.5rem;
    background-color: ${props => props.theme['purple-500']};

    display: flex;
    align-items: center;
    margin-left: 0.5rem;
`