import { Header } from "../../components/Header";
import { Card, Container, SubCard, SubTitle, Title, Description } from "./styles";

import Delivery from '../../assets/delivery.svg'
import Map from '../../assets/icons/d2-map.svg'
import Timer from '../../assets/icons/d2-timer.svg'
import Cipher from '../../assets/icons/d2-money.svg'

import { CoffeeContext } from '../../context'
import { useContext, useEffect, useState } from 'react'


export function Success() {
    const { coffees, address, setAddress } = useContext(CoffeeContext);
    const [initializing, setInitializing] = useState(false)

    async function loadAddress() {
        const response = await fetch('http://localhost:3000/address');
        const data = await response.json();

        setAddress(data);
    }

    // coffees.map((coffee: any) =>
    //     fetch(`http://localhost:3000/coffee/${coffee.id}`, {
    //         method: 'PATCH',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ "amountCoffee":  0})
    //     }).then(data => data.json())
    // )

    useEffect(() => {
        loadAddress();
        setInitializing(true);
    }, [initializing])

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>Uhu! Pedido confirmado</Title>
                    <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
                    <Card>
                        <SubCard>
                            <img src={Map} />
                            <div style={{ paddingLeft: '0.75rem' }}>
                                <Description>Entrega em <b>{address[0].street}, {address[0].number}</b></Description>
                                <Description>{address[0].district} - {address[0].city}, {address[0].state}</Description>
                            </div>
                        </SubCard>
                        <SubCard>
                            <img src={Timer} />
                            <div style={{ paddingLeft: '0.75rem' }}>
                                <Description>Previsão de Entrega</Description>
                                <Description><b>20 min - 30 min</b></Description>
                            </div>
                        </SubCard>
                        <SubCard>
                            <img src={Cipher} />
                            <div style={{ paddingLeft: '0.75rem' }}>
                                <Description>Pagamento na Entrega</Description>
                                <Description><b>{address[0].payment}</b></Description>
                            </div>
                        </SubCard>
                    </Card>
                </div>
                <img src={Delivery} />
            </Container>
        </>
    )
} 