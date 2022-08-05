import Head from "next/head"
import { List, ListItem, Navbar, Page, Preloader, Chip, ListInput } from 'konsta/react'
import { Crypto } from '../lib'
import { useState, useEffect } from "react"
export default function Index() {
  const { data } = Crypto()
  const [CryptoData, setCryptoData] = useState()
  useEffect(() => {
    if (data) setCryptoData(data)
  }, [CryptoData, data, setCryptoData])
  return (
    <Page>
      <Head>
        <title>Cryto Prices</title>
      </Head>
      <Navbar
        title="Crypto Prices" />
      {data ? (
        <List
          margin="m-0">
          {data.map((data, i) => (
            <ListItem
              link
              chevron={false}
              media={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={data.name}
                  src={data.image.small}
                  className="h-10 w-10 object-contain" />
              }
              after={
                <Chip>₱ {data.market_data.current_price.php.toLocaleString()}</Chip>
              }
              key={i}
              title={data.name}
              subtitle={data.symbol}
              text={data.market_data.price_change_percentage_24h > 0 ? <span className="text-green-500">{data.market_data.price_change_percentage_24h}%</span> : <span className="text-red-500">{data.market_data.price_change_percentage_24h}%</span>} />
          ))}
        </List>
      ) : (
        <div className="flex justify-center items-center p-4">
          <Preloader />
        </div>
      )}
    </Page >
  )
}