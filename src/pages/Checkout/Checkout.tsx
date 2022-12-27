import { Header } from "../../components/Header";
import { Container, TitleContainers, PaymentContainer, TitlePayment, SubTitlePayment, HeaderPaymentContainer, PaymentButtons, PaymentOption } from "./styles";
import { FormAddress } from "../../components/FormAddress";
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';

export function Checkout () {
    return (
        <>
            <Header />
            <Container>
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
                            <PaymentOption>
                                <CreditCard color="#8047F8" size={14} /> 
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                CARTÃO DE CRÉDITO
                            </PaymentOption>
                            <PaymentOption>
                                <Bank color="#8047F8" size={14} /> 
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                CARTÃO DE DÉBITO
                            </PaymentOption>
                            <PaymentOption>
                                <Money color="#8047F8" size={14} /> 
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                DINHEIRO
                            </PaymentOption>
                        </PaymentButtons>
                    </PaymentContainer>
                </section>
                <section>
                    <TitleContainers>Cafés selecionados</TitleContainers>
                </section>
            </Container>
        </>
    )
}