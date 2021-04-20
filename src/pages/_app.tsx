import '../styles/global.scss'
import styles from '../styles/app.module.scss'
import { Header, Player } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  )
}

export default MyApp
