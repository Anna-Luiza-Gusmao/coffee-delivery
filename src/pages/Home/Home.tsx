import { Header } from "../../components/Header"
import {
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

import CartCoffeeContainer from '../../assets/icons/cart.svg'

import { useState, useEffect, useContext } from 'react'
import { CoffeeContext } from '../../context'
import { useNavigate } from "react-router-dom"
import { ContainerHome } from "../../components/ContainerHome"
import { MutedPriceCoffee } from "../../components/MutedPriceCoffee"

export function Home () {
    const { coffees, setCoffees, totalAmountCoffee } = useContext(CoffeeContext);
    const [initializing, setInitializing] = useState(false)

    async function loadCoffees() {
        const response = await fetch('http://localhost:3000/coffee');
        const data = await response.json();

        setCoffees(data);
    }

    const updateLocalStorage = () => {
        const stateAmountCoffee = JSON.stringify(totalAmountCoffee)
        localStorage.setItem('@coffee-delivery: amountCoffee-state-1.0.0', stateAmountCoffee)
    }

    const initialize = () => {
        setInitializing(!initializing)
    }

    const navigate = useNavigate()

    useEffect (() => {
        loadCoffees();
        setInitializing(true);
        updateLocalStorage();
    }, [initializing])

    return (
        <>
            <Header />
            <ContainerHome />
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
                                        <PriceCoffee>{parseFloat(coffee.price).toFixed(2).replace(".", ",")}</PriceCoffee>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <MutedPriceCoffee id={coffee.id} amountCoffee={coffee.amountCoffee} setInitializing={initialize} />
                                        <ButtonCart onClick={() => navigate('/checkout')}><img src={CartCoffeeContainer} /></ButtonCart>
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