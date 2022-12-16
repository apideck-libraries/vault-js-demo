export const frontendExample = `import { ApideckVault } from '@apideck/vault-js'

const MyComponent = () => {
  const openVault = async () => {
    // Create a Vault session
    const response = await fetch('/api/vault/sessions', { method: 'POST' })
    const { data } = await response.json()
    const token = data.session_token

    // Open Vault with a valid session token
    ApideckVault.open({ token })
  }

  return (
    <button onClick={openVault}>
      Open Vault
    </button>
  )
}`

export const backendExample = `import Apideck from '@apideck/node'

export default async function handler(_, res) {
  const apideck = new Apideck({
    apiKey: '<api-key>',
    appId: '<app-id>',
    consumerId: '<consumer-id>'
  })
  const settings = {}
  const result = await apideck.vault.sessionsCreate(settings)
  res.json(result)
}`
