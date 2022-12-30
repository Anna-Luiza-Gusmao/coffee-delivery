import { Container, TitleCoffee, PriceCoffee, ButtonRemove, Divider } from "./styles"
import { Trash } from 'phosphor-react'

import Teste from '../../assets/coffees/coffee1.png'
import { MutedPriceCoffee } from "../MutedPriceCoffee"

export function SelectedCoffee () {
    return (
        <>
            <Container>
                <img src={Teste}/>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <TitleCoffee>Expresso Tradicional</TitleCoffee>
                    <div style={{display: 'flex'}}>
                        <MutedPriceCoffee id={1} amountCoffee={2}/>
                        <ButtonRemove type="button">
                            <Trash color="#8047F8" size={14} />
                            <span style={{ paddingLeft: '0.5rem' }}></span>
                            REMOVER
                        </ButtonRemove>
                    </div>
                </div>
                <div style={{marginTop: '0.75rem'}}>
                    <PriceCoffee>R$ </PriceCoffee>
                    <PriceCoffee>9,90</PriceCoffee>
                </div>
            </Container>
            <Divider />
        </>
    )
}