import Head from "next/head";
import {getItemsByPool} from "../../data/dummy-data";
import ShoppingList from "@/components/shopping-list/shopping-list";
import ActiveContext from '@/store/active-context';
import { useContext, useEffect } from 'react';

function HomePage() {

  const shoppingFilteredItems = getItemsByPool('shopping-list');
  const activeCtx = useContext(ActiveContext)
  useEffect(()=>{
    activeCtx.onChangeCategory("home")
  }, [])


  return (
    <>
      <Head>
        <title>Shopping List</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
          <ShoppingList items={shoppingFilteredItems}/>

        </div>
    </>
  )
}

export default HomePage;
