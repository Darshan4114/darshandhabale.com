import Head from "next/head"
import Link from "next/link"
import styl from "styles/css/mini-games.module.css"
import Header from "comp/Header"

export default function Games() {
  return (
    <>
      <Head>
        <title>Mini Games</title>
      </Head>
      <Header />
      <div
        style={{
          height: "100vh",
          width: "100vw",
          fontSize: "7rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "calc(100vw - 2rem)",
        }}
      >
        <Link href="/mini-games/snake">
          <a className={styl.gameName}>Snake</a>
        </Link>
      </div>
    </>
  )
}
