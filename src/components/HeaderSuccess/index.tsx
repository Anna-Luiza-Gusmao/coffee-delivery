import { HeaderContainer, LocationContainer, LocationText } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'

export function HeaderSuccess() {
    const returnHome = () => {
        localStorage.removeItem('@coffee-delivery: amountCoffee-state-1.0.0')
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