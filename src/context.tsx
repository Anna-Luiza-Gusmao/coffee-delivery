import { ReactNode, createContext, useState, useEffect } from 'react'

export const CoffeeContext = createContext({} as any)

interface CoffeeContextProviderProps {
    children:  ReactNode;
}

interface DataCoffee {
    id: number,
    tag: object
    name: string,
    description: string,
    price: string,
    amountCoffee: number
}

export function CoffeeContextProvider ({children}: CoffeeContextProviderProps) {
    const [coffees, setCoffees] = useState<DataCoffee[]>([])

    const amountCoffeeLocalStorage = localStorage.getItem('@coffee-delivery: amountCoffee-state-1.0.0')
    let stateAmountCoffee = 0
    if (amountCoffeeLocalStorage != null) stateAmountCoffee = parseInt(amountCoffeeLocalStorage)

    const [totalAmountCoffee, setTotalAmountCoffee] = useState(stateAmountCoffee)

    return (
        <CoffeeContext.Provider value={{
			coffees,
            setCoffees,
            totalAmountCoffee, 
            setTotalAmountCoffee
		}}
		>
			{children}
		</CoffeeContext.Provider>
    )
}