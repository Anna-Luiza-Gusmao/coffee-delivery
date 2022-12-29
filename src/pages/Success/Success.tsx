import { HeaderSuccess } from "../../components/HeaderSuccess";
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

    function resetAmountCoffee() {
        coffees.map((coffee: any) =>
            fetch(`http://localhost:3000/coffee/${coffee.id}`, {
                method: 'PATCH',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "amountCoffee":  0})
            }).then(data => data.json())
        )
    }

    useEffect(() => {
        loadAddress();
        setInitializing(true);
        resetAmountCoffee();
    }, [initializing])

    return (
        <>
            <HeaderSuccess />
            <Container>
                <div>
                    <Title>Uhu! Pedido confirmado</Title>
                    <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
                    <Card>
                        <SubCard>
                            <img src={Map} />
                            <div style={{ paddingLeft: '0.75rem' }}>

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

                            </div>
                        </SubCard>
                    </Card>
                </div>
                <img src={Delivery} />
            </Container>
        </>
    )
} 