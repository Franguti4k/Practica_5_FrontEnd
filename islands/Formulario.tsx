import { FunctionalComponent } from "preact/src/index.d.ts";
import { Contact } from "../types.ts";

const Formulario:FunctionalComponent = () => {
    const crearUsuario = (/*contact:Contact*/) => {

    }
    return(
        <div>
            <form action="">
                <input type="text" name="name" />
                <input type="text" name="phone" />
                <input type="text" name="email" />
                <button onClick={(e) => crearUsuario(/*</form>e.currentTarget.value*/)}>Crear</button>
            </form>
        </div>
    )
}

export default Formulario