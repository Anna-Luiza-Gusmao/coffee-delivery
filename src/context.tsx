import { ReactNode, createContext, useState } from 'react'

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

interface DataAddress {
    id: number,
    cep: string,
    street: string,
    number: number,
    complement: string,
    district: string,
    city: string,
    state: string
}

export function CoffeeContextProvider ({children}: CoffeeContextProviderProps) {
    const [coffees, setCoffees] = useState<DataCoffee[]>([])
    const [address, setAddress] = useState<DataAddress[]>([])

    const amountCoffeeLocalStorage = localStorage.getItem('@coffee-delivery: amountCoffee-state-1.0.0')
    let stateAmountCoffee = 0
    if (amountCoffeeLocalStorage != null) stateAmountCoffee = parseInt(amountCoffeeLocalStorage)

    const [totalAmountCoffee, setTotalAmountCoffee] = useState(stateAmountCoffee)

    return (
        <CoffeeContext.Provider value={{
			coffees,
            setCoffees,
            totalAmountCoffee, 
            setTotalAmountCoffee,
            address, 
            setAddress
		}}
		>
			{children}
		</CoffeeContext.Provider>
    )
}