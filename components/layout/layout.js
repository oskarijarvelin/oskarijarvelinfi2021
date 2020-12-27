import Head from 'next/head'
import styles from './Layout.module.scss'
import Header from '../header/header'
import Footer from '../footer/footer'

export default function Layout({children, title}) {
    return (
        <>
            <Head>
                <title>{title} - Oskari Järvelin</title>
                <link rel="icon" href="/favicon.png" />
            </Head>

            <Header />
            <main className={styles.main + ` py-5`}>
                {children}
            </main>
            <Footer />
        </>
    )
}