import CopyIcon from 'components/CopyIcon'
import { ReactNode } from 'react'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import resolveConfig from 'tailwindcss/resolveConfig'
import style from 'react-syntax-highlighter/dist/cjs/styles/hljs/tomorrow-night-blue'
import tailwindConfig from '../../tailwind.config.js'
import typescript from 'react-syntax-highlighter/dist/cjs/languages/hljs/typescript'
import { useClipboard } from 'use-clipboard-copy'

const fullTailwindConfig = resolveConfig(tailwindConfig as any)
const theme = fullTailwindConfig.theme as any

SyntaxHighlighter.registerLanguage('typescript', typescript)

interface Props {
  title: string | ReactNode
  code: string
  lang?: string
  className?: string
  customStyle?: any
}

const CodeBlock = ({
  title,
  code,
  lang = 'typescript',
  className = '',
  customStyle = {}
}: Props) => {
  const clipboard = useClipboard({ copiedTimeout: 1200 })

  return (
    <div className={`text-base font-normal ${className}`}>
      <div className="m-0 flex select-none items-center justify-between rounded-t-md border-t border-b border-l border-r  border-ui-700 bg-ui-800 px-4 py-1.5 text-white">
        <span className="text-xs font-normal leading-normal">{title}</span>
        {clipboard.copied ? (
          <span className="py-0.5 text-sm">Copied</span>
        ) : (
          <CopyIcon onClick={() => clipboard.copy(code)} className="text-gray-200" />
        )}
      </div>
      <div className="hide-scrollbar overflow-hidden flex justify-between rounded-b-md border-b border-l border-r border-ui-700 dark:border-none shadow-lg shadow-ui-400/40">
        <SyntaxHighlighter
          language={lang}
          wrapLines={true}
          customStyle={{
            fontSize: '0.725rem',
            lineHeight: '1.5em',
            scrollbarWidth: 'none',
            overflow: 'auto',
            boxShadow: theme.boxShadow.sm,
            padding: theme.padding[3],
            width: '100%',
            overflowX: 'auto',
            ...customStyle
          }}
          lineNumberStyle={{
            color: theme.colors.gray[500],
            minWidth: '2em'
          }}
          showLineNumbers
          style={style}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CodeBlock
