import { Header } from "../../components/Header";
import { Container, TitleContainers } from "./styles";
import { FormAddress } from "../../components/FormAddress";

export function Checkout () {
    return (
        <>
            <Header />
            <Container>
                <section style={{marginBottom: '0.75rem'}}>
                    <TitleContainers>Complete seu pedido</TitleContainers>
                    <FormAddress />
                </section>
                <section>
                    <TitleContainers>Cafés selecionados</TitleContainers>
                </section>
            </Container>
        </>
    )
}