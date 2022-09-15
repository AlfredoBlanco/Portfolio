import '../styles/globals.css'
import { EnglishProvider } from '../context/englishContext'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EnglishProvider >
      <Component {...pageProps} />
    </EnglishProvider>
  ) 
}

export default MyApp
