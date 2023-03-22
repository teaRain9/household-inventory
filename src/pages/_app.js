import Layout from '@/components/layout/layout'
import { ActiveContextProvider } from '@/store/active-context'
import { SelectedItemsContextProvider } from '@/store/selectedItems-context';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SelectedItemsContextProvider>
      <ActiveContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ActiveContextProvider>
    </SelectedItemsContextProvider>
  );
}
