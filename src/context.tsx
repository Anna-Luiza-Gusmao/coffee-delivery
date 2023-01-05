import { ReactNode, createContext, useState } from 'react'

interface CoffeesContextType {
    coffees: DataCoffee[],
    setCoffees: React.Dispatch<React.SetStateAction<DataCoffee[]>>,
    totalAmountCoffee: number,
    setTotalAmountCoffee: React.Dispatch<React.SetStateAction<number>>,
    address: DataAddress[],
    setAddress: React.Dispatch<React.SetStateAction<DataAddress[]>>,
    sumOfCoffeesPrice: number,
    setSumOfCoffeesPrice: React.Dispatch<React.SetStateAction<number>>
}

export const CoffeeContext = createContext({} as CoffeesContextType)

interface CoffeeContextProviderProps {
    children: ReactNode;
}

interface DataCoffee {
    id: number,
    tag: object
    name: string,
    description: string,
    price: number,
    amountCoffee: number
}

interface DataAddress {
    id: number,
    cep: string,
    street: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    state: string,
    payment: string
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
    const [coffees, setCoffees] = useState<DataCoffee[]>([])
    const [address, setAddress] = useState<DataAddress[]>([])

    const amountCoffeeLocalStorage = localStorage.getItem('@coffee-delivery: amountCoffee-state-1.0.0')
    let stateAmountCoffee = 0
    if (amountCoffeeLocalStorage != null) stateAmountCoffee = parseInt(amountCoffeeLocalStorage)

    const [totalAmountCoffee, setTotalAmountCoffee] = useState(stateAmountCoffee)
    const [sumOfCoffeesPrice, setSumOfCoffeesPrice] = useState(0.00)

    return (
        <CoffeeContext.Provider value={{
            coffees,
            setCoffees,
            totalAmountCoffee,
            setTotalAmountCoffee,
            address,
            setAddress,
            sumOfCoffeesPrice,
            setSumOfCoffeesPrice
        }}
        >
            {children}
        </CoffeeContext.Provider>
    )
}