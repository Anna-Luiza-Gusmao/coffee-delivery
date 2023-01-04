import { Container, TitleCoffee, PriceCoffee, ButtonRemove, Divider, ImageCoffee } from "./styles"
import { Trash } from 'phosphor-react'

import { MutedPriceCoffee } from "../MutedPriceCoffee"

import { useContext } from 'react'
import { CoffeeContext } from '../../context'
import produce from "immer"
import { useNavigate } from "react-router-dom"

interface ISelectedCoffeeProps {
    initialize: () => void
}

interface IDataCoffeesSelected {
    id: number,
    image: string,
    name: string,
    price: string,
    amountCoffee: number
}

const BaseDataCoffeesSelected = [
    {
        id: 0,
        image: "path",
        name: "name",
        price: 0,
        amountCoffee: 0
    }
]

export function SelectedCoffee({ initialize }: ISelectedCoffeeProps) {
    const { coffees, setSumOfCoffeesPrice } = useContext(CoffeeContext)
    const selectedCoffees: number[] = []
    let allCoffeesSelected: IDataCoffeesSelected[] = []

    const navigate = useNavigate()

    coffees.map((coffee: any) => {
        if (coffee.amountCoffee > 0) {
            if (selectedCoffees.indexOf(coffee.id) == -1) {
                selectedCoffees.push(coffee.id)
                produce(BaseDataCoffeesSelected, draft => {
                    allCoffeesSelected.push({ id: coffee.id, image: coffee.image, name: coffee.name, price: coffee.price, amountCoffee: coffee.amountCoffee })
                })
            }
        }
    })

    if (allCoffeesSelected.length === 0) navigate('/')

    const handleRemoveCoffee = (id: number) => {
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "amountCoffee": 0 })
        }).then(data => data.json())
    }

    function calculateTotalItems() {
        let totalPriceCoffees = 0

        allCoffeesSelected.forEach(coffee => {
            totalPriceCoffees += parseFloat(coffee.price) * coffee.amountCoffee
        })

        return totalPriceCoffees
    }
    setSumOfCoffeesPrice(calculateTotalItems())

    return (
        <>
            {
                allCoffeesSelected.map((item) => (
                    <div key={item.id}>
                        <Container>
                            <ImageCoffee src={item.image} />
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <TitleCoffee>{item.name}</TitleCoffee>
                                <div style={{ display: 'flex' }}>
                                    <MutedPriceCoffee id={item.id} amountCoffee={item.amountCoffee} setInitializing={initialize} />
                                    <ButtonRemove type="button" onClick={() => handleRemoveCoffee(item.id)}>
                                        <Trash color="#8047F8" size={14} />
                                        <span style={{ paddingLeft: '0.5rem' }}></span>
                                        REMOVER
                                    </ButtonRemove>
                                </div>
                            </div>
                            <div style={{ marginTop: '0.75rem' }}>
                                <PriceCoffee>R$ </PriceCoffee>
                                <PriceCoffee>{parseFloat(item.price).toFixed(2).replace(".", ",")}</PriceCoffee>
                            </div>
                        </Container>
                        <Divider />
                    </div>
                ))
            }
        </>
    )
}