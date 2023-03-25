import Head from 'next/head'
//import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Posts from './posts';
import Hero from '@/components/ui/Hero';
import Services from '@/components/ui/Services';
import Work from '@/components/ui/Work';

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
         <Hero />
         <Services />
         <Work />
         <Posts />
      </main>
    </>
  )
}

export default Homepage;
