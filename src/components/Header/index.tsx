import { HeaderContainer, ButtonsContainer, LocationContainer, LocationText, CartButton, AmountCoffee } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'
import IconSupermarketCart from '../../assets/icons/supermarket-cart.svg'
import { useContext } from 'react'
import { CoffeeContext } from '../../context'
import { useNavigate } from 'react-router-dom'

export function Header() {
    const { totalAmountCoffee } = useContext(CoffeeContext)
    const navigate = useNavigate()

    const navigationDirection = () => {
        if (totalAmountCoffee === 0) {
            navigate('/')
        } else {
            navigate('/checkout')
        }
    }

    return (
        <HeaderContainer>
            <img src={Logo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />

            <ButtonsContainer>
                <LocationContainer>
                    <img src={IconLocation} />
                    <LocationText>Porto Alegre, RS</LocationText>
                </LocationContainer>
                <div>
                    <AmountCoffee>{totalAmountCoffee}</AmountCoffee>
                    <CartButton onClick={navigationDirection}>
                        <img src={IconSupermarketCart} />
                    </CartButton>
                </div>
            </ButtonsContainer>
        </HeaderContainer>
    )
}