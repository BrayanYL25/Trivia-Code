import { MASTER_KEY, KEY_NAME } from '../KEYS/api_key.mjs'

export const getQuestions = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': MASTER_KEY,
        'X-Key-Name': KEY_NAME
      }
    }
    const res = await fetch('https://api.jsonbin.io/v3/b/65ed2383dc74654018b0b765', config)
    const { record } = await res.json()
    return record.result
  } catch (error) {
    throw new Error(`Hubo un error al realizar fetch: ${error}`)
  }
}
