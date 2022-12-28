import { Header } from "../../components/Header";
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
} from "./styles";

import { FormAddress } from "../../components/FormAddress";
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export function Checkout() {
    const navigate = useNavigate()
    const [chosenPaymentOption, setChosenPaymentOption] = useState("")
    const [initializing, setInitializing] = useState(false)

    function handleAddressForm(event: FormEvent) {
        event.preventDefault();

        fetch('http://localhost:3000/address', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "cep": "90250-440",
                "street": "Rua João Daniel Martinelli",
                "number": 102,
                "complement": "Próximo a uma padaria",
                "district": "Farrapos",
                "city": "Porto Alegre",
                "state": "RS",
                "payment": chosenPaymentOption
            })
        }).then(data => data.json())

        navigate('/success')
    }

    const credito = document.getElementById(
        'buttonCredito',
    ) as HTMLButtonElement;
    const paymentOptionCredito = () => {
        if (credito != null) setChosenPaymentOption(credito.value)
        console.log(chosenPaymentOption)
    }

    const debito = document.getElementById(
        'buttonDebito',
    ) as HTMLButtonElement;
    const paymentOptionDebito = () => {
        if (debito != null) setChosenPaymentOption(debito.value)
        console.log(chosenPaymentOption)
    }

    const dinheiro = document.getElementById(
        'buttonDinheiro',
    ) as HTMLButtonElement;
    const paymentOptionDinheiro = () => {
        if (dinheiro != null) setChosenPaymentOption(dinheiro.value)
        console.log(chosenPaymentOption)
    }
    

    return (
        <>
            <Header />
            <Container onSubmit={handleAddressForm}>
                <section>
                    <TitleContainers>Complete seu pedido</TitleContainers>
                    <FormAddress />
                    <PaymentContainer>
                        <HeaderPaymentContainer>
                            <CurrencyDollar color="#8047F8" size={24} />
                            <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem' }}>
                                <TitlePayment>Pagamento</TitlePayment>
                                <SubTitlePayment>O pagamento é feito na entrega. Escolha a forma que deseja pagar</SubTitlePayment>
                            </div>
                        </HeaderPaymentContainer>
                        <PaymentButtons>
                            <PaymentOption id="buttonCredito" type="button" value="Crédito" onClick={paymentOptionCredito}>
                                <CreditCard color="#8047F8" size={14} />
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                CARTÃO DE CRÉDITO
                            </PaymentOption>
                            <PaymentOption id="buttonDebito" type="button" value="Débito" onClick={paymentOptionDebito}>
                                <Bank color="#8047F8" size={14} />
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                CARTÃO DE DÉBITO
                            </PaymentOption>
                            <PaymentOption id="buttonDinheiro" type="button" value="Dinheiro" onClick={paymentOptionDinheiro}>
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
                        <ConfirmButton type="submit">CONFIRMAR PEDIDO</ConfirmButton>
                    </CoffeContainer>
                </section>
            </Container>
        </>
    )
}