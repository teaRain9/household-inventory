import Layout from '@/components/layout/layout'
import { ActiveContextProvider } from '@/store/active-context'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ActiveContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActiveContextProvider>
  );
}
