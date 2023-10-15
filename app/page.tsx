
import { CodeEditor } from './CodeEditor'
import { YDocProvider } from '@y-sweet/react'
import { getOrCreateDoc } from '@y-sweet/sdk'

// import {CONNECTION_STRING} from '@/lib/config'

type HomeProps = {
  searchParams: Record<string, string>
}

const CONNECTION_STRING = "yss://j50rr8Tdqb5gfNfg_rw.AAAg_-VBX9RjPa4QCnMpHUXlyhPcTMJM1DSWuo86qNyaaxY@prod.y-sweet.net/p/gyaINP7dTZ4IaY3BGiI/"
// const CONNECTION_STRING = "ys://127.0.0.1:8080"

export default async function Home({ searchParams }: HomeProps) {
  const clientToken = await getOrCreateDoc(searchParams.doc, CONNECTION_STRING)

  return (
    <YDocProvider clientToken={clientToken} setQueryParam="doc">
      <CodeEditor />
    </YDocProvider>
  )
}