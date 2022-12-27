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

import { useState, useEffect, useContext } from 'react'
import { CoffeeContext } from '../../context'

export function Home () {
    const { coffees, setCoffees} = useContext(CoffeeContext);
    const [initializing, setInitializing] = useState(false)

    async function loadCoffees() {
        const response = await fetch('http://localhost:3000/coffee');
        const data = await response.json();

        setCoffees(data);
    }

    useEffect (() => {
        loadCoffees();
        setInitializing(true);
    }, [initializing, handleIncreaseAmount, handleDecreaseAmount])

    function handleIncreaseAmount(id: number, currentAmount: number){
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "amountCoffee":  currentAmount + 1 })
        }).then(data => data.json())
    }

    function handleDecreaseAmount(id: number, currentAmount: number){
        currentAmount = currentAmount - 1

        if(currentAmount < 0) currentAmount = 0

        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "amountCoffee":  currentAmount })
        }).then(data => data.json())
    }

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
                        coffees.map((coffee: any) => (
                            <CoffeContainer key={coffee.id}>
                                <img src={coffee.image} style={{marginTop: '-1rem'}}/>
                                <div style={{marginTop: '0.75rem', marginBottom: '1rem'}}>
                                {
                                    (coffee.tag).map((tag: string) => <TagCoffee>{tag}</TagCoffee>)
                                }
                                </div>
                                <TitleCoffee>{coffee.name}</TitleCoffee>
                                <DescriptionCoffee>{coffee.description}</DescriptionCoffee>
                                <PriceContainer>
                                    <div>
                                        <DollarSign>R$</DollarSign>
                                        <PriceCoffee>{coffee.price}</PriceCoffee>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <AlterPriceContainer>
                                            <AlterPriceButton onClick={() => handleDecreaseAmount(coffee.id, coffee.amountCoffee)}>-</AlterPriceButton>
                                            <span style={{fontSize: '1rem', padding: '0 0.25rem'}}>{coffee.amountCoffee}</span>
                                            <AlterPriceButton onClick={() => handleIncreaseAmount(coffee.id, coffee.amountCoffee)}>+</AlterPriceButton>
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