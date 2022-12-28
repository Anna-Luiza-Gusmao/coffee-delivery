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

export function Home () {
    const { coffees, setCoffees, setTotalAmountCoffee, totalAmountCoffee } = useContext(CoffeeContext);
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

    useEffect (() => {
        loadCoffees();
        setInitializing(true);
        updateLocalStorage();
    }, [initializing])

    function handleIncreaseAmount(id: number, currentAmount: number){
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "amountCoffee":  currentAmount + 1 })
        }).then(data => data.json())

        setTotalAmountCoffee(totalAmountCoffee + 1)
        setInitializing(!initializing)
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

        if (totalAmountCoffee == 0) {
            setTotalAmountCoffee(0)
        }else{
            setTotalAmountCoffee(totalAmountCoffee - 1)
        }
        setInitializing(!initializing)
    }

    const navigate = useNavigate()

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
                                        <PriceCoffee>{coffee.price}</PriceCoffee>
                                    </div>
                                    <div style={{display: 'flex'}}>
                                        <AlterPriceContainer>
                                            <AlterPriceButton onClick={() => handleDecreaseAmount(coffee.id, coffee.amountCoffee)}>-</AlterPriceButton>
                                            <span style={{fontSize: '1rem', padding: '0 0.25rem'}}>{coffee.amountCoffee}</span>
                                            <AlterPriceButton onClick={() => handleIncreaseAmount(coffee.id, coffee.amountCoffee)}>+</AlterPriceButton>
                                        </AlterPriceContainer>
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