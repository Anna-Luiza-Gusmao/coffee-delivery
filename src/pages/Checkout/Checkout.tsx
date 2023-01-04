import { Header } from "../../components/Header"
import {
    Container,
    TitleContainers,
    PaymentContainer,
    TitlePayment,
    SubTitlePayment,
    HeaderPaymentContainer,
    PaymentButtons,
    PaymentOption,
    CoffeContainer,
    TotalItems,
    ConfirmButton,
    Description,
    Price,
    Total,
    DescriptionTotal,
    TotalPrice
} from "./styles"

import { FormAddress } from "../../components/FormAddress"
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { FormEvent, useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { SelectedCoffee } from "../../components/SelectedCoffee"
import { CoffeeContext } from '../../context'

export function Checkout() {
    const navigate = useNavigate()
    const [chosenPaymentOption, setChosenPaymentOption] = useState("")
    const { 
        renderFormAddress, 
        newCep,
        newStreet,
        newNumber,
        newComplement,
        newDistrict,
        newCity,
        newState, 
    } = FormAddress()

    const { setCoffees } = useContext(CoffeeContext)
    const [initializing, setInitializing] = useState(false)

    async function handleAddressForm(event: FormEvent) {
        event.preventDefault();

        fetch('http://localhost:3000/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cep": newCep,
                "street": newStreet,
                "number": newNumber,
                "complement": newComplement,
                "district": newDistrict,
                "city": newCity,
                "state": newState,
                "payment": chosenPaymentOption
            })
        }).then(data => data.json())

        navigate('/success')
    }

    const paymentOptionCredito = () => {
        setChosenPaymentOption("Crédito")
    }

    const paymentOptionDebito = () => {
        setChosenPaymentOption("Débito")
    }

    const paymentOptionDinheiro = () => {
        setChosenPaymentOption("Dinheiro")
    }

    const checkOptionPayment = (
        chosenPaymentOption === '' || 
        newCep === '' || 
        newStreet === '' || 
        newNumber === '' || 
        newDistrict === '' || 
        newCity === '' || 
        newState === ''
    )

    async function loadCoffees() {
        const response = await fetch('http://localhost:3000/coffee');
        const data = await response.json();

        setCoffees(data);
    }

    const initialize = () => {
        setInitializing(!initializing)
    }

    useEffect (() => {
        loadCoffees();
    }, [initializing])
    
    return (
        <>
            <Header />
            <Container onSubmit={handleAddressForm}>
                <section>
                    <TitleContainers>Complete seu pedido</TitleContainers>
                    {renderFormAddress}
                    <PaymentContainer>
                        <HeaderPaymentContainer>
                            <CurrencyDollar color="#8047F8" size={24} />
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem' }}>
                                <TitlePayment>Pagamento</TitlePayment>
                                <SubTitlePayment>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubTitlePayment>
                            </div>
                        </HeaderPaymentContainer>
                        <PaymentButtons>
                            <PaymentOption type="button" onClick={paymentOptionCredito}>
                                <CreditCard color="#8047F8" size={14} />
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                CARTÃO DE CRÉDITO
                            </PaymentOption>
                            <PaymentOption type="button"  onClick={paymentOptionDebito}>
                                <Bank color="#8047F8" size={14} />
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                CARTÃO DE DÉBITO
                            </PaymentOption>
                            <PaymentOption type="button" onClick={paymentOptionDinheiro}>
                                <Money color="#8047F8" size={14} />
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                DINHEIRO
                            </PaymentOption>
                        </PaymentButtons>  
                    </PaymentContainer>
                </section>
                <section>
                    <TitleContainers>Cafés selecionados</TitleContainers>
                    <CoffeContainer>
                        <SelectedCoffee initialize={initialize} />
                        <TotalItems>
                            <Description>Total de itens</Description>
                            <Price>R$ </Price>
                        </TotalItems>
                        <TotalItems>
                            <Description>Entrega</Description>
                            <Price>R$ 7,00</Price>
                        </TotalItems>
                        <Total>
                            <DescriptionTotal>Total</DescriptionTotal>
                            <TotalPrice>R$ </TotalPrice>
                        </Total>
                        <ConfirmButton type="submit" disabled={checkOptionPayment}>CONFIRMAR PEDIDO</ConfirmButton>
                    </CoffeContainer>
                </section>
            </Container>
        </>
    )
}