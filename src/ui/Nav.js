import React, { useEffect, useState, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

// import styled, { css } from "styled-components"
import styl from "styl/Nav.module.scss"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

// import { getAuth, signOut } from "firebase/auth"
// import { getFirestore, getDocs, collection } from "firebase/firestore";
// import { getStorage, ref, getDownloadURL } from "firebase/storage";
// import app from "../firebase/clientApp"

// import AuthContext from "./AuthContext"

// const auth = getAuth(app)
// const db = getFirestore(app);
// const storage = getStorage(app);

export default function Nav({ tabValue, setTabValue }) {
  const router = useRouter()
  const [navState, setNavState] = useState(null)
  const [showHam, setShowHam] = useState(true)
  // const { claims, user } = useContext(AuthContext)

  const handleChange = (event, newValue) => {
    setTabValue(newValue)
  }
  // function logout() {
  //   toggleNav()
  //   signOut(auth)
  //     .then(() => {
  //       router.push("/login")
  //     })
  //     .catch((error) => {
  //       console.log("Error during logout")
  //     })
  // }

  function toggleNav() {
    setNavState(!navState)
  }
  useEffect(() => {
    function resetHam() {
      if (window.innerWidth < 750) {
        setShowHam(true)
      } else {
        setShowHam(false)
      }
    }
    resetHam()
    window.addEventListener("resize", () => {
      resetHam()
    })
  }, [])
  useEffect(() => {
    const nav = document.querySelector("ul")
    const openBtn = document.getElementsByClassName(styl.openNavBtn)[0]
    if (navState) {
      openBtn.style.display = "flex"
      openBtn.classList.remove("invisible")
      nav.classList.remove("visible")
    } else {
      nav.style.display = "block"
      openBtn.classList.add("invisible")
      nav.classList.add("visible")
      nav.classList.remove("ellipse-close-active")
    }
  }, [navState])

  const Ham = (props) => {
    return (
      <button className={props.className} onClick={toggleNav}>
        <Image src="/img/ham.svg" height="28" width="32" alt="Open nav" />{" "}
        {/* <p>Menu</p> */}
      </button>
    )
  }

  return (
    <>
      {/* <Tabs
        className={styl.styledTabs}
        value={tabValue}
        centered
        onChange={handleChange}
        aria-label="Navigation"
      > 
        {" "}
        <Tab label="Bookings" value="/bookings" />
        <Tab label="Customers" value="/customers" />
        <Tab label="Drivers" value="/drivers" />
      </Tabs> */}
      {showHam && <Ham className={`${styl.ham} ${styl.openNavBtn}`} />}

      <div className={`${styl.styledNav} ${navState ? styl.open : styl.close}`}>
        <ul>
          {/* <div className={styl.tabGrp}>
            <p>Just Fun</p>
            <Link href="/just-fun/when-the-earth-blows-up">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/just-fun/asteroid-strike.png"
                    height="58"
                    width="58"
                    alt="When the earth blows up"
                  />
                  <p>When the earth blows up</p>
                </li>
              </a>
            </Link>
          </div> */}
          <div className={styl.tabGrp}>
            <p>Mini Games</p>
            <Link href="/mini-games/snake">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/snake.png"
                    height="28"
                    width="28"
                    alt="Snake"
                  />
                  <p> Snake</p>
                </li>
              </a>
            </Link>
          </div>
          <div className={styl.tabGrp}>
            <p>Portfolio</p>
            <Link href="/portfolio/air3x3">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/basketball-ball.png"
                    height="28"
                    width="28"
                    alt="Air3x3: The basketball tournament application"
                  />
                  <p> Air3x3</p>
                </li>
              </a>
            </Link>
            <Link href="/portfolio/babydojo">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/portfolio/babydojo/baby.png"
                    height="28"
                    width="28"
                    alt="Babydojo: Parenting application"
                  />
                  <p> Babydojo</p>
                </li>
              </a>
            </Link>
          </div>
          <div className={styl.tabGrp}>
            <p>Main</p>
            <Link href="/consult">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/consult.png"
                    height="28"
                    width="28"
                    alt="Consult"
                  />
                  <p> Consult</p>
                </li>
              </a>
            </Link>
            <Link href="/">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/imagination.png"
                    height="28"
                    width="28"
                    alt="Articles"
                  />
                  <p> Articles</p>
                </li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li onClick={toggleNav}>
                  <Image
                    src="/img/author1.jpg"
                    height="28"
                    width="28"
                    alt="About Darshan"
                  />
                  <p> About Darshan</p>
                </li>
              </a>
            </Link>
          </div>
        </ul>
      </div>
      {/* <button className="closeNavBtn" onClick={closeNav}>
        <Image src="/img/close.png" height="34" width="34" alt="close nav" />
      </button> */}
    </>
  )
}
