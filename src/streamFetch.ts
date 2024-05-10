export async function* streamingFetch(
  input: RequestInfo | URL,
  init?: RequestInit
): AsyncIterable<[string, ReadableStreamDefaultReader<Uint8Array>]> {
  const response = await fetch(input, init);
  if (response.status !== 200 || !response.body)
    throw new Error(`Request failed with status ${response.status}`);
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;

    try {
      yield [decoder.decode(value), reader];
    } catch (e: any) {
      console.warn(e.message);
    }
  }
}
