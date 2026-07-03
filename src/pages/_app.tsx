import 'styles/tailwind.css'

import { ModalProvider, ToastProvider } from '@apideck/components'

import Analytics from 'components/analytics/Analytics'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Analytics source="sample:vault-js-demo">
      <ToastProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </ToastProvider>
    </Analytics>
  )
}
