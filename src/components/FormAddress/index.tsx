import { AddressForm, HeaderAddressForm, SubTitle, Title, SmallerInput, AllInputs, StreetInput, InputComplement, CityInput, UFInput } from "./styles";
import { MapPinLine } from 'phosphor-react'

export function FormAddress() {
    return (
        <AddressForm>
            <HeaderAddressForm>
                <MapPinLine color="#C47F17" size={24} />
                <div style={{ display: 'flex', flexDirection: 'column', paddingLeft: '0.5rem' }}>
                    <Title>Endereço de Entrega</Title>
                    <SubTitle>Informe o endereço onde deseja receber seu pedido</SubTitle>
                </div>
            </HeaderAddressForm>

            <AllInputs>
                <SmallerInput
                    type="text"
                    placeholder="CEP"
                    required
                />
                <StreetInput
                    type="text"
                    placeholder="Rua"
                    required
                />
                <div style={{ display: 'flex' }}>
                    <SmallerInput
                        type="text"
                        placeholder="Número"
                        required
                    />
                    <span style={{ paddingLeft: '0.75rem' }}></span>
                    <InputComplement
                        type="text"
                        placeholder="Complemento"
                    />
                </div>
                <div style={{ display: 'flex' }}>
                    <SmallerInput
                        type="text"
                        placeholder="Bairro"
                        required
                    />
                    <span style={{ paddingLeft: '0.75rem' }}></span>
                    <CityInput
                        type="text"
                        placeholder="Cidade"
                        required
                    />
                    <span style={{ paddingLeft: '0.75rem' }}></span>
                    <UFInput
                        type="text"
                        placeholder="UF"
                        required
                    />
                </div>
            </AllInputs>
        </AddressForm>
    )
}