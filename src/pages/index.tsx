import { Button, useToast } from '@apideck/components'
import { backendExample, frontendExample } from 'codeExamples'

import { ApideckVault } from '@apideck/vault-js'
import CodeBlock from 'components/CodeBlock'
import Layout from '../components/Layout'
import { NextPage } from 'next'
import { useState } from 'react'

const IndexPage: NextPage = () => {
  const { addToast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const createVaultSession = async () => {
    try {
      setIsLoading(true)
      const response = await fetch('/api/vault/sessions', { method: 'POST' })
      const { data } = await response.json()
      const token = data.session_token
      ApideckVault.open({ token, showLanguageSwitch: true, onReady: () => setIsLoading(false) })
    } catch (error: any) {
      addToast({
        title: 'Something went wrong',
        description: error?.message || error,
        type: 'error'
      })
      setIsLoading(false)
    }
  }

  return (
    <Layout title="Vault JS Demo">
      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <main>
          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-3xl pt-20 pb-12 sm:pt-48">
              <div>
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                  <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="text-gray-600">
                      First time using Apideck?{' '}
                      <a
                        href="https://developers.apideck.com/get-started"
                        target={'_blank'}
                        rel="noopener noreferrer"
                        className="font-semibold text-indigo-600"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        Start here <span aria-hidden="true">&rarr;</span>
                      </a>
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                    Embed Vault into your application using Vault JS
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                    Create a better experience for your customers by adding our UI component that
                    guides users through authorizing any integration that Apideck provides.
                  </p>
                  <div className="mt-8 flex gap-x-4 sm:justify-center">
                    <Button
                      onClick={createVaultSession}
                      isLoading={isLoading}
                      size="large"
                      className="inline-block !rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1"
                    >
                      Open Vault
                    </Button>

                    <a
                      href="https://www.npmjs.com/package/@apideck/vault-js"
                      target={'_blank'}
                      rel="noopener noreferrer"
                      className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                    >
                      View on NPM
                      <span className="text-gray-400 ml-2" aria-hidden="true">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                  <svg
                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fillOpacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#9089FC" />
                        <stop offset={1} stopColor="#FF80B5" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 max-w-7xl px-4 mx-auto pb-32">
              <CodeBlock title="Client side" code={frontendExample} />
              <CodeBlock title="Server side" code={backendExample} />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default IndexPage
