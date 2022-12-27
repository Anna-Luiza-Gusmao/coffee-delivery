import styled from "styled-components"

export const Container = styled.main`
    display: flex;

    margin-top: 2rem;
    margin-bottom: 15rem;
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
    }
`