import { Header } from "../../components/Header";
import { Card, Container, SubCard, SubTitle, Title, Description } from "./styles";

import Delivery from '../../assets/delivery.svg'
import Map from '../../assets/icons/d2-map.svg'
import Timer from '../../assets/icons/d2-timer.svg'
import Cipher from '../../assets/icons/d2-money.svg'


export function Success () {
    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>Uhu! Pedido confirmado</Title>
                    <SubTitle>Agora é só aguardar que logo o café chegará até você</SubTitle>
                    <Card>
                        <SubCard>
                            <img src={Map}/>
                            <div style={{paddingLeft: '0.75rem'}}>
                                <Description>Entrega em <b>Rua João Daniel Martinelli, 102</b></Description>
                                <Description>Farrapos - Porto Alegre, RS</Description>
                            </div>
                        </SubCard>
                        <SubCard>
                            <img src={Timer}/>
                            <div style={{paddingLeft: '0.75rem'}}>
                                <Description>Previsão de Entrega</Description>
                                <Description><b>20 min - 30 min</b></Description>
                            </div>
                        </SubCard>
                        <SubCard>
                            <img src={Cipher}/>
                            <div style={{paddingLeft: '0.75rem'}}>
                                <Description>Pagamento na Entrega</Description>
                                <Description><b>Dinheiro</b></Description>
                            </div>
                        </SubCard>
                    </Card>
                </div>
                <img src={Delivery} />
            </Container>
        </>
    )
} 