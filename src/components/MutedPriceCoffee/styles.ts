import styled from "styled-components"

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

    &:hover {
        color: ${props => props.theme['purple-500']};
        cursor: pointer;
        transition: color 0.5s;
    }
`