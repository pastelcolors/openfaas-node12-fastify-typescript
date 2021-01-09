import { ContextPayload, EventPayload } from "./types"

export default async (event: EventPayload, context: ContextPayload) => {
  const result = {
    message: 'Body: ' + JSON.stringify(event.body),
  }

  return context.code(200).send(result)
}
