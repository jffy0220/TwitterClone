import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Navigation/nav'
import TweetInput from '../components/TweetField/TweetInput'
import Tweet from '../components/Tweet/tweet'
import Recommendations from '../components/Recommendations/recommendation'
import { Grid, Box, Container } from '@mui/material';

const exampleTweetData = [
  {
    user: "John Doe",
    handle: "johndoe",
    date: "Feb 3, 2024",
    content: "Testing a few things here on this new application!",
    views: 32,
    comments: 120,
    replies: 58,
    favorites: 240
  },
  {
    user: "Jane Doe",
    handle: "janeDoe",
    date: "Feb 4, 2024",
    content: "This is a crazy long text stream of a tweet that may be hard to see on the page but we will see anyways this run on sentance is starting to get really long okay then goodbye now.",
    views: 10000000,
    comments: 500000,
    replies: 235450,
    favorites: 12456
  },
  {
    user: "Mlon Eusk",
    handle: "xFounder",
    date: "Jan 1, 1969",
    content: "This is the first every tweet! How is it not the first tweet!",
    views: 0,
    comments: 0,
    replies: 0,
    favorites: 0
  },
  {
    user: "Founder",
    handle: "cooldude",
    date: "Feb 10, 2024",
    content: "Wow this is so cool!",
    views: 50000000,
    comments: 2300000,
    replies: 1546874,
    favorites: -1
  },
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="This is a Twitter Clone Project created by Justin Farley" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Nav />
          </Grid>
          <Grid item xs={12} md={6}>
            <TweetInput />
            {exampleTweetData.map((tweet, index) => (
              <Tweet key={index} {...tweet} />
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <Recommendations />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
