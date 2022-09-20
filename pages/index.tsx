import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'


const Home = () => {
  const router = useRouter();
const handleClick = () =>{
router.push('/login')
}

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World!!!</h1>
       <button className='bg-success' onClick={handleClick }> Login </button>
    </main>

      
    </div>
  )
}

export default Home
