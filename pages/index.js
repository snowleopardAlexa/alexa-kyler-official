import Head from 'next/head'
//import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Posts from './posts';

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Alexa Kyler - UX / UI Designer and Front-End Developer.</title>
        <meta name="description" content="Alexa Kyler - UX / UI Designer and Front-End Developer. | Web development | Web design | Digital art | Petico Art Store." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         <h1 className="text-3xl font-bold">Home page</h1>

         <Posts />
      </main>
    </>
  )
}

export default Homepage;
