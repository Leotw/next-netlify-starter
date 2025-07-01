import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Profile() {
  return (
    <div className="container">
      <Head>
        <title>Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p>Profile</p>
      </main>

      <Footer />
    </div>
  )
}

function handler() {

}
