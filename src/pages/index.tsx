import React from 'react'
import Head from 'next/head'
import { DecoderContainer } from '@/components/DecoderContainer'

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>ALPH Tx Decoder</title>
          <meta name="description" content="Generated by @alephium/cli init" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DecoderContainer />
      </div>
    </>
  )
}
