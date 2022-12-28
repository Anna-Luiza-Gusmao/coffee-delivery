import { HeaderContainer, LocationContainer, LocationText } from './styles'
import Logo from '../../assets/icons/logo.svg'
import IconLocation from '../../assets/icons/location-icon.svg'
import { useNavigate } from 'react-router-dom'

export function HeaderSuccess () {
    const navigate = useNavigate()

    return (
        <HeaderContainer>
            <img src={Logo} onClick={() => navigate('/')} style={{cursor: 'pointer'}}/>

            <LocationContainer>
                <img src={IconLocation}/>
                <LocationText>Porto Alegre, RS</LocationText>
            </LocationContainer>
        </HeaderContainer>
    )
}