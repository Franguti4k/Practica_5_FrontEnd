import { FunctionalComponent } from 'preact/src/index.d.ts';
import { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Data2, Message } from "../types.ts";
type Props = {
    chatId: Signal<string>
}


const getMessage = async (prop:Props):Promise<Message[]> => {
    if(prop.chatId.value === "") return []
    const request = await fetch(`https://back-a-p4.onrender.com/messages/chat/${prop.chatId.value}`)
    const response:Data2 = await request.json()
    return response.data
}

const ChatContainer: FunctionalComponent<Props> = (prop) => {

    const [chat, setChat] = useState<Message[]>([])

    useEffect(() => {
        
        const fetchData = async () => {
            const mensajes = await getMessage(prop)
            setChat(mensajes)
        }
        fetchData()
    },[prop.chatId.value])
    return(
        <div class= "ChatContainer">
            {prop.chatId.value}
            {chat.map((c) => <div key={c._id} class={`message ${c.isContactMessage ? "left" : "right"}`}>{c.content}</div>)}
            <form method="POST">
                <input type="text"  />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default ChatContainer