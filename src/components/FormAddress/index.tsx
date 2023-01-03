import { ChangeEvent, useState } from "react";
import {
    AddressForm,
    HeaderAddressForm,
    SubTitle,
    Title,
    SmallerInput,
    AllInputs,
    StreetInput,
    InputComplement,
    CityInput,
    UFInput
} from "./styles";
import { MapPinLine } from 'phosphor-react'
import MaskedInput from 'react-text-mask'

export function FormAddress() {
    const [newCep, setNewCep] = useState("")
    const [newStreet, setNewStreet] = useState("")
    const [newNumber, setNewNumber] = useState("")
    const [newComplement, setNewComplement] = useState("")
    const [newDistrict, setNewDistrict] = useState("")
    const [newCity, setNewCity] = useState("")
    const [newState, setNewState] = useState("")

    const handleCEP = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCep(event.target.value)
    }

    const handleStreet = (event: ChangeEvent<HTMLInputElement>) => {
        setNewStreet(event.target.value)
    }

    const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
        setNewNumber(event.target.value)
    }

    const handleComplement = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComplement(event.target.value)
    }

    const handleDistrict = (event: ChangeEvent<HTMLInputElement>) => {
        setNewDistrict(event.target.value)
    }

    const handleCity = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCity(event.target.value)
    }

    const handleState = (event: ChangeEvent<HTMLInputElement>) => {
        setNewState(event.target.value.toUpperCase())
    }

    return {
        newCep,
        newStreet,
        newNumber,
        newComplement,
        newDistrict,
        newCity,
        newState,
        render: (
            <AddressForm>
                <HeaderAddressForm>
                    <MapPinLine color="#C47F17" size={24} />
                    <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem' }}>
                        <Title>Endereço de Entrega</Title>
                        <SubTitle>Informe o endereço onde deseja receber seu pedido</SubTitle>
                    </div>
                </HeaderAddressForm>

                <AllInputs>
                    <MaskedInput
                        mask={[/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]}
                        placeholder="CEP"
                        value={newCep}
                        onChange={handleCEP}
                        render={(ref, props) => (
                            <SmallerInput ref={ref} {...props} />
                        )}
                    />
                    <StreetInput
                        type="text"
                        placeholder="Rua"
                        required
                        value={newStreet}
                        onChange={handleStreet}
                    />
                    <div style={{ display: 'flex' }}>
                        <SmallerInput
                            type="text"
                            placeholder="Número"
                            required
                            value={newNumber}
                            onChange={handleNumber}
                        />
                        <span style={{ paddingLeft: '0.75rem' }}></span>
                        <InputComplement
                            type="text"
                            placeholder="Complemento"
                            value={newComplement}
                            onChange={handleComplement}
                        />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SmallerInput
                            type="text"
                            placeholder="Bairro"
                            required
                            value={newDistrict}
                            onChange={handleDistrict}
                        />
                        <span style={{ paddingLeft: '0.75rem' }}></span>
                        <CityInput
                            type="text"
                            placeholder="Cidade"
                            required
                            value={newCity}
                            onChange={handleCity}
                        />
                        <span style={{ paddingLeft: '0.75rem' }}></span>
                        <UFInput
                            type="text"
                            placeholder="UF"
                            required
                            value={newState}
                            onChange={handleState}
                            maxLength={2}
                        />
                    </div>
                </AllInputs>
            </AddressForm>
        )
    }
}