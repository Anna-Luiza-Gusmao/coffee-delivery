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
    AlterPriceButton,
    AllCoffees
 } from './styles'

import Image from '../../assets/coffeeHome.png'
import Cart from '../../assets/icons/d2-cart.svg'
import Box from '../../assets/icons/d2-box.svg'
import Timer from '../../assets/icons/d2-timer.svg'
import Coffee from '../../assets/icons/d2-coffee.svg'
import CartCoffeeContainer from '../../assets/icons/cart.svg'

import Coffee1 from '../../assets/coffees/coffee1.png'

import { useState, useEffect } from 'react'

interface DataCoffee {
    id: number,
    tag: object
    name: string,
    description: string,
    price: string,
    amountCoffee: number
}


export function Home () {
    const [coffees, setCoffees] = useState<DataCoffee[]>([])
    const [initializing, setInitializing] = useState(false)

    async function loadCoffees() {
        const response = await fetch('http://localhost:3000/coffee');
        const data = await response.json();

        setCoffees(data);
    }

    useEffect (() => {
        loadCoffees();
        setInitializing(true);
    }, [initializing])

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
                <AllCoffees>
                    {
                        coffees.map((coffee) => (
                            <CoffeContainer key={coffee.id}>
                                <img src={Coffee1} style={{marginTop: '-1rem'}}/>
                                <TagCoffee>TRADICIONAL</TagCoffee>
                                <TitleCoffee>{coffee.name}</TitleCoffee>
                                <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
                                <PriceContainer>
                                    <div>
                                        <DollarSign>R$</DollarSign>
                                        <PriceCoffee>{coffee.price}</PriceCoffee>
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
                        ))
                    }
                </AllCoffees>
            </main>
        </>
    )
}