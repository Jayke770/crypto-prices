import Head from "next/head"
import { Navbar, Page } from 'konsta/react'
export default function Index() {
  return (
    <Page>
      <Head>
        <title>Cryto Prices</title>
      </Head>
      <Navbar
        title="Crypto Prices" />
    </Page>
  )
}