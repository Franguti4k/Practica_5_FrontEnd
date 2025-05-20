import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Contacts from "../islands/Contacts.tsx";

import { Contact, Data } from "../types.ts";

export const handler:Handlers = {
    GET: async (_req: Request, ctx:FreshContext<unknown, Data>) => {
      const request = await fetch('https://back-a-p4.onrender.com/contacts/')
      const response = await request.json()
      console.log(response.data)

      return ctx.render({
        data: response.data
      })
      
    }
  }

const Page = (props:PageProps<Data>) => {
  const contacts = props.data.data
  return(
    <div class= "Inicio">
      <Contacts contacts={contacts}/>
    </div>
  )
}

export default Page