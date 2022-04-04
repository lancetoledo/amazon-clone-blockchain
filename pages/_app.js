import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { AmazonProvider } from '../context/AmazonContext'

function MyApp({ Component, pageProps }) {
  return (
  <MoralisProvider
  serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER}
  appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
  >
    <AmazonProvider>
      <Component {...pageProps} />
    </AmazonProvider>

  </MoralisProvider>

  )
}

export default MyApp
