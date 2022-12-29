import { HeaderContainer, LocationContainer, LocationText } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'
import { useNavigate } from 'react-router-dom'

export function HeaderSuccess() {
    const navigate = useNavigate()

    function resetAddressJson () {
        fetch(`http://localhost:3000/address/1`, {
            method: 'DELETE'
        }).then(data => data.json())
    }

    const returnHome = () => {
        resetAddressJson()
        localStorage.removeItem('@coffee-delivery: amountCoffee-state-1.0.0')
        navigate('/')
    }

    return (
        <HeaderContainer>
            <img src={Logo} onClick={returnHome} style={{ cursor: 'pointer' }} />

            <LocationContainer>
                <img src={IconLocation} />
                <LocationText>Porto Alegre, RS</LocationText>
            </LocationContainer>
        </HeaderContainer>
    )
}