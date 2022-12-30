import styled from "styled-components"

export const Container = styled.form`
    display: flex;
    justify-content: space-evenly;

    margin-top: 2rem;
    margin-bottom: 10rem;
`

export const TitleContainers = styled.p`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme['gray-400']};

    margin-bottom: 0.938rem;
`

export const PaymentContainer = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme['white-100']};

    padding: 2.5rem;
`

export const HeaderPaymentContainer = styled.div`
    display: flex;
    margin-bottom: 2rem;
`

export const TitlePayment = styled.p`
    color: ${props => props.theme['gray-400']};
    line-height: 130%;
`

export const SubTitlePayment = styled.p`
    color: ${props => props.theme['gray-300']};
    font-size: 0.875rem;
    line-height: 130%;
`

export const PaymentButtons = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
`

export const PaymentOption = styled.button`
    border: none;
    border-radius: 8px;
    padding: 1rem;
    width: 11.167rem;

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
`

export const CoffeContainer = styled.div`
    background-color: ${props => props.theme['white-100']};
    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    padding: 2.5rem;

    display: flex;
    flex-direction: column;

    width: 28rem;

    @media (min-width: 768px) and (max-width: 1366px){
        width: 24rem;
    }
`

export const TotalItems = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 0.938rem;
`

export const Description = styled.p`
    font-size: 0.875rem;
    line-height: 130%;
    color: ${props => props.theme['gray-300']};
`

export const Price = styled.p`
    color: ${props => props.theme['gray-300']};
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;

    margin-bottom: 1.5rem;
`

export const DescriptionTotal = styled.p`
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    color: ${props => props.theme['gray-400']};
`

export const TotalPrice = styled.p`
    font-size: 1.25rem;
    font-weight: 700;
    color: ${props => props.theme['gray-400']};
`

export const ConfirmButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 8px;
    padding: 0.75rem;

    background-color: ${props => props.theme['yellow-600']};
    color: #FFF;

    &:hover {
        cursor: pointer;
        background-color: ${props => props.theme['yellow-500']};
        transition: background-color 0.5s;
    }
`