import { HeaderContainer, ButtonsContainer, LocationContainer, LocationText, CartButton, AmountCoffee } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'
import IconSupermarketCart from '../../assets/icons/supermarket-cart.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context'

export function Header () {
    const { totalAmountCoffee } = useContext(CoffeeContext)

    return (
        <HeaderContainer>
            <img src={Logo}/>

            <ButtonsContainer>
                <LocationContainer>
                    <img src={IconLocation}/>
                    <LocationText>Porto Alegre, RS</LocationText>
                </LocationContainer>
                <div>
                    <AmountCoffee>{totalAmountCoffee}</AmountCoffee>
                    <CartButton>
                        <img src={IconSupermarketCart}/>
                    </CartButton>
                </div>
            </ButtonsContainer>
        </HeaderContainer>
    )
}