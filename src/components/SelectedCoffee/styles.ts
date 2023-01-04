import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`

export const ImageCoffee = styled.img`
    @media (min-width: 768px) and (max-width: 1366px){
        width: 5rem;
    }
`

export const TitleCoffee = styled.p`
    margin-bottom: 1rem;
    color: ${props => props.theme['gray-400']};
`

export const PriceCoffee = styled.span`
    font-weight: 700;
    color: ${props => props.theme['gray-300']};
`

export const ButtonRemove = styled.button`
    border: none;
    border-radius: 8px;
    padding: 0.406rem 0.5rem;
    margin-left: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.75rem;
    color: ${props => props.theme['gray-300']};
    background: ${props => props.theme['white-200']};

    &:hover{
        background: #D7D5D5;
        cursor: pointer;
    }
    &:focus {
        box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
        background: ${props => props.theme['purple-100']};
    }

    @media (min-width: 768px) and (max-width: 1366px){
        margin-left: 0.25rem;
    }
`

export const Divider = styled.hr`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: 0;
    border-top: 1px solid ${props => props.theme['white-200']};
`