import Apideck, { CreateSessionResponse } from '@apideck/node'
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(_: VercelRequest, res: VercelResponse) {
  const settings = {} // See all available options here: https://developers.apideck.com/apis/vault/reference#operation/sessionsCreate
  const consumerId = `demo-vault-js-${Math.random()}-${new Date().toISOString()}` // Provide a unique ID. Most of the time, this is an ID of your internal data model that represents a user or account in your system.
  const apideck = new Apideck({
    apiKey: `${process.env.API_KEY}`,
    appId: `${process.env.APP_ID}`,
    consumerId
  })
  const result: CreateSessionResponse = await apideck.vault.sessionsCreate(settings)

  res.json(result)
}
