import { AlterPriceContainer, AlterPriceButton } from './styles'
import { useContext } from 'react'
import { CoffeeContext } from '../../context'

interface MutedPriceCoffeeProps {
    id: number,
    amountCoffee: number,
    setInitializing: () => void
}

export function MutedPriceCoffee({id, amountCoffee, setInitializing}: MutedPriceCoffeeProps) {
    const { setTotalAmountCoffee, totalAmountCoffee } = useContext(CoffeeContext);

    function handleIncreaseAmount(id: number, currentAmount: number){
        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "amountCoffee":  currentAmount + 1 })
        }).then(data => data.json())

        setTotalAmountCoffee(totalAmountCoffee + 1)
        setInitializing()
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
        setInitializing()
    }

    return (
        <AlterPriceContainer>
            <AlterPriceButton type='button' onClick={() => handleDecreaseAmount(id, amountCoffee)}>-</AlterPriceButton>
            <span style={{ fontSize: '1rem', padding: '0 0.25rem' }}>{amountCoffee}</span>
            <AlterPriceButton type='button' onClick={() => handleIncreaseAmount(id, amountCoffee)}>+</AlterPriceButton>
        </AlterPriceContainer>
    )
}