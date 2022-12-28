import {
    DescriptionContainer,
    TextContainer,
    Title,
    SubTitle,
    ImgContainer,
    CharacterContainer,
    CharacterBox,
    CharacterText
} from './styles'

import Image from '../../assets/coffeeHome.png'
import Cart from '../../assets/icons/d2-cart.svg'
import Box from '../../assets/icons/d2-box.svg'
import Timer from '../../assets/icons/d2-timer.svg'
import Coffee from '../../assets/icons/d2-coffee.svg'

export function ContainerHome() {
    return (
        <DescriptionContainer>
            <TextContainer>
                <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                <CharacterContainer>
                    <CharacterBox>
                        <img src={Cart} />
                        <CharacterText>Compra simples e segura</CharacterText>
                    </CharacterBox>
                    <CharacterBox>
                        <img src={Box} />
                        <CharacterText>Embalagem mantém o café intacto</CharacterText>
                    </CharacterBox>
                    <CharacterBox>
                        <img src={Timer} />
                        <CharacterText>Entrega rápida e rastreada</CharacterText>
                    </CharacterBox>
                    <CharacterBox>
                        <img src={Coffee} />
                        <CharacterText>O café chega fresquinho até você</CharacterText>
                    </CharacterBox>
                </CharacterContainer>
            </TextContainer>
            <div style={{ padding: '1rem' }}>
                <ImgContainer src={Image} />
            </div>
        </DescriptionContainer>
    )
}