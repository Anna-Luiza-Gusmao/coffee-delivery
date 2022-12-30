import { HeaderContainer, LocationContainer, LocationText } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'
import { useNavigate } from 'react-router-dom'

export function HeaderSuccess() {
    const navigate = useNavigate()

    const returnHome = () => {
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