import { Header } from "../../components/Header"
import { DescriptionContainer, 
    TextContainer, 
    Title, 
    SubTitle, 
    ImgContainer, 
    CharacterContainer, 
    CharacterBox, 
    CharacterText, 
    CoffeContainer, 
    TitleMain, 
    TagCoffee,
    TitleCoffee, 
    DescriptionCoffee,
    DollarSign,
    PriceCoffee,
    ButtonCart,
    PriceContainer,
    AlterPriceContainer,
    AlterPriceButton
 } from './styles'

import Image from '../../assets/coffeeHome.png'
import Cart from '../../assets/icons/d2-cart.svg'
import Box from '../../assets/icons/d2-box.svg'
import Timer from '../../assets/icons/d2-timer.svg'
import Coffee from '../../assets/icons/d2-coffee.svg'
import CartCoffeeContainer from '../../assets/icons/cart.svg'

import TestCoffee from '../../assets/Image.png'

export function Home () {
    return (
        <>
            <Header />
            <DescriptionContainer>
                <TextContainer>
                    <Title>Encontre o café perfeito para qualquer hora do dia</Title>
                    <SubTitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</SubTitle>
                    <CharacterContainer>
                        <CharacterBox>
                            <img src={Cart}/>
                            <CharacterText>Compra simples e segura</CharacterText>
                        </CharacterBox>
                        <CharacterBox>
                            <img src={Box}/>
                            <CharacterText>Embalagem mantém o café intacto</CharacterText>
                        </CharacterBox>
                        <CharacterBox>
                            <img src={Timer}/>
                            <CharacterText>Entrega rápida e rastreada</CharacterText>
                        </CharacterBox>
                        <CharacterBox>
                            <img src={Coffee}/>
                            <CharacterText>O café chega fresquinho até você</CharacterText>
                        </CharacterBox>
                    </CharacterContainer>
                </TextContainer>
                <div style={{padding: '1rem'}}>
                    <ImgContainer src={Image}/>
                </div>
            </DescriptionContainer>
            <main>
                <TitleMain>Nossos cafés</TitleMain>
                <CoffeContainer>
                    <img src={TestCoffee} style={{marginTop: '-1rem'}}/>
                    <TagCoffee>TRADICIONAL</TagCoffee>
                    <TitleCoffee>Expresso Tradicional</TitleCoffee>
                    <DescriptionCoffee>O tradicional café feito com água quente e grãos moídos</DescriptionCoffee>
                    <PriceContainer>
                        <div>
                            <DollarSign>R$</DollarSign>
                            <PriceCoffee>9,90</PriceCoffee>
                        </div>
                        <div style={{display: 'flex'}}>
                            <AlterPriceContainer>
                                <AlterPriceButton>-</AlterPriceButton>
                                <span style={{fontSize: '1rem', padding: '0 0.25rem'}}>1</span>
                                <AlterPriceButton>+</AlterPriceButton>
                            </AlterPriceContainer>
                            <ButtonCart><img src={CartCoffeeContainer} /></ButtonCart>
                        </div>
                    </PriceContainer>
                </CoffeContainer>
            </main>
        </>
    )
}