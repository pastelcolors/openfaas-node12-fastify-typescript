interface EventPayload {
  body: unknown;
  headers: IncomingHttpHeaders;
  method: string;
  query: unknown;
  path: string;
}

interface ContextPayload {
  statusCode: number;
  headerValues: OutgoingHttpHeaders;
  result: unknown;
  error: Error | null;
  code(statusCode?: number): this;
  headers(headerValues?: OutgoingHttpHeaders): this;
  send(result: unknown): this;
  err(error: Error): this;
}

export default async (event: EventPayload, context: ContextPayload) => {
  const result = {
    message: 'Body: ' + JSON.stringify(event.body),
  }

  return context.code(200).send(result)
}
