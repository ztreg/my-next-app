import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>My next app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       
       </main>
        
    </div>
  )
}
