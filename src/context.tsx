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

export function CoffeeContextProvider ({children}: CoffeeContextProviderProps) {
    const [coffees, setCoffees] = useState<DataCoffee[]>([])
    const [totalAmountCoffee, setTotalAmountCoffee] = useState(0)

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