import { HeaderContainer, ButtonsContainer, LocationContainer, LocationText, CartButton } from './stytes'
import Logo from '../../assets/logo.svg'
import IconLocation from '../../assets/location-icon.svg'
import IconSupermarketCart from '../../assets/supermarket-cart.svg'

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