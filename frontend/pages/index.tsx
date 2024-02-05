import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Navigation/nav'
import TweetInput from '../components/TweetField/TweetInput'
import Tweet from '../components/Tweet/tweet'

const exampleTweetData = {
  user: "John Doe",
  handle: "johndoe",
  date: "Feb 3, 2024",
  content: " Testing a few things here on this new application!",
  views: 32,
  comments: 120,
  replies: 58,
  favorites: 240
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="This is a Twitter Clone Project created by Justin Farley" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav />
        <TweetInput />
        <Tweet {...exampleTweetData} />
      </main>

      <footer className={styles.footer}>
        <h6>Footer goes here</h6>
      </footer>
    </div>
  )
}
