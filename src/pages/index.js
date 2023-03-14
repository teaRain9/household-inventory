import Head from "next/head";
import {getUrgentItems} from "../../data/dummy-data";
import ShoppingList from "@/components/shopping-list/shopping-list";
import ActiveContext from '@/store/active-context';
import { useEffect, useContext } from 'react';

import fs from 'fs/promises'
import path from "path";


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  return {
    props: {
      shops: data.shops
    },
    revalidate: 10,
  }
}

function HomePage({shops}) {

  const urgentItems = getUrgentItems();
  const activeCtx = useContext(ActiveContext)
  activeCtx.onChangeCategory("home")


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
          <ul>
            {shops.map(shop => {
              return <li className="text-white" key={shop.id}>{shop.name}</li>
            })}
          </ul>
        </div>
    </>
  )
}

export default HomePage;
