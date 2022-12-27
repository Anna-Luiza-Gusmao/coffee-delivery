import styled from "styled-components"

export const AddressForm = styled.form`
    border-radius: 8px;
    background-color: ${props => props.theme['white-100']};

    margin-bottom: 0.75rem;
`

export const HeaderAddressForm = styled.div`
    display: flex;
    padding: 0 2rem;
    padding-top: 2rem;
`

export const Title = styled.p`
    color: ${props => props.theme['gray-400']};
    line-height: 130%;
`

export const SubTitle = styled.p`
    color: ${props => props.theme['gray-300']};
    font-size: 0.875rem;
    line-height: 130%;
`

export const AllInputs = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
`

export const BaseInput = styled.input`
    padding: 0.75rem;
    margin-bottom: 1rem;

    border: none;
    border-radius: 8px;
    background-color: ${props => props.theme['white-200']};
`

export const SmallerInput = styled(BaseInput)`
    width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
    width: 35rem; 
`

export const InputComplement = styled(BaseInput)`
    width: 21.75rem;
`

export const CityInput = styled(BaseInput)`
    width: 17.25rem;
`

export const UFInput = styled(BaseInput)`
    width: 3.75rem;
`