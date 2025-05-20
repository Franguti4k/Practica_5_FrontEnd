import { FunctionalComponent } from "preact/src/index.d.ts";
import { Contact} from "../types.ts";
import ContactContainer from "./ContactContainer.tsx";

type Props = {
    contacts : Contact[]
}
const Contacts: FunctionalComponent<Props> = (prop) => {
    return(
        <div class="ListaContactos">
            <a href="/CrearContacto"><div>Crear Contacto</div></a>
            <div>
            {prop.contacts.map((c) => <ContactContainer key={c._id} contact={c}/> )} 
            </div>
        </div>
    )
}

export default Contacts