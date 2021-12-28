import React, { useEffect, useState, useContext } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"

// import styled, { css } from "styled-components"
import styl from "styles/css/Nav.module.css"
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
          <p className={styl.tabGrp}>Portfolio</p>
          <Link href="/portfolio/air3x3">
            <a>
              <li>
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
        </ul>
      </div>
      {/* <button className="closeNavBtn" onClick={closeNav}>
        <Image src="/img/close.png" height="34" width="34" alt="close nav" />
      </button> */}
    </>
  )
}
