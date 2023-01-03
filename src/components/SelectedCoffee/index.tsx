import { Container, TitleCoffee, PriceCoffee, ButtonRemove, Divider, ImageCoffee } from "./styles"
import { Trash } from 'phosphor-react'

import Teste from '../../assets/coffees/coffee1.png'
import { MutedPriceCoffee } from "../MutedPriceCoffee"

import { useContext } from 'react'
import { CoffeeContext } from '../../context'

interface SelectedCoffeeProps {
    initialize: () => void
}

export function SelectedCoffee({ initialize }: SelectedCoffeeProps) {
    const { coffees, selectedCoffees } = useContext(CoffeeContext)

    coffees.map((coffee: any) => {
        if (coffee.amountCoffee > 0) {
            if (selectedCoffees.indexOf(coffee.id) == -1) {
                selectedCoffees.push(coffee.id)
            }
        }
    })

    return (
        selectedCoffees.map((coffee: number) => (
            <div key={coffee}>
                <Container>
                    <ImageCoffee src={Teste} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <TitleCoffee>Expresso Tradicional</TitleCoffee>
                        <div style={{ display: 'flex' }}>
                            <MutedPriceCoffee id={coffee} amountCoffee={2} setInitializing={initialize} />
                            <ButtonRemove type="button">
                                <Trash color="#8047F8" size={14} />
                                <span style={{ paddingLeft: '0.5rem' }}></span>
                                REMOVER
                            </ButtonRemove>
                        </div>
                    </div>
                    <div style={{ marginTop: '0.75rem' }}>
                        <PriceCoffee>R$ </PriceCoffee>
                        <PriceCoffee>9,90</PriceCoffee>
                    </div>
                </Container>
                <Divider />
            </div>
        ))
    )
}