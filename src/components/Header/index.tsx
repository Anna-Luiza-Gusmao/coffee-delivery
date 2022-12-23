import { HeaderContainer, ButtonsContainer, LocationContainer, LocationText, CartButton } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'
import IconSupermarketCart from '../../assets/icons/supermarket-cart.svg'

export function Header () {
    return (
        <HeaderContainer>
            <img src={Logo}/>

            <ButtonsContainer>
                <LocationContainer>
                    <img src={IconLocation}/>
                    <LocationText>Porto Alegre, RS</LocationText>
                </LocationContainer>
                <CartButton>
                    <img src={IconSupermarketCart}/>
                </CartButton>
            </ButtonsContainer>
        </HeaderContainer>
    )
}