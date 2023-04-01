import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Blockchain Supplements</title>
        <meta name="description" content="Bringing Blockchain and Health Together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/worldinhands.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>

          
        </div>

        <div className={styles.center}>
          
          <Image
            className={styles.logo}
            src="/BSUPPLOGO.png"
            alt="bsupp Logo"
            width={400}
            height={400}
            priority
          />

        </div>
        <div><p>Coming Soon!!!</p></div>

        <div className={styles.center}>
          <a
            href="https://t.me/BlockchainSupplementsOfficial"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            <Image
            className={styles.logo}
            src="/Telegram Logo.png"
            alt="Telegram Logo"
            width={50}
            height={50}
            priority
          />
            </h2>


          </a>

          <a
            href="https://twitter.com/blockchainsupps"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            <Image
            className={styles.logo}
            src="/Twitter Logo.png"
            alt="Twitter Logo"
            width={50}
            height={50}
            priority
          />
            </h2>

          </a>




        </div>
      </main>
    </>
  )
}
