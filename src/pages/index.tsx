import Head from 'next/head'
import Image from 'next/image'
import HomePage from './Home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HMI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  )
}
