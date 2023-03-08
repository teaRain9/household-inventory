import Head from 'next/head'
import {getUrgentItems} from "../../dummy-data";
import ShoppingList from "@/components/shopping-list/shopping-list";

function HomePage() {

  const urgentItems = getUrgentItems();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <ShoppingList items={urgentItems}/>
        </div>
    </>
  )
}

export default HomePage;
