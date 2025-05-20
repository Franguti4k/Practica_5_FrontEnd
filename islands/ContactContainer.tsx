import { FunctionalComponent } from "preact/src/index.d.ts";
import { Contact} from "../types.ts";

type Props = {
    contact : Contact
}
const ContactContainer: FunctionalComponent<Props> = (prop) => {
    return(
        <div class="ContactInfo">
            <div>
            {prop.contact.name}
            </div>
            <div>
            {prop.contact.phone}
            </div>
        </div>
    )
}

export default ContactContainer