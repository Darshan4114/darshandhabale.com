import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Logo (props) {
  const [logoSize, setLogoSize] = useState("small")
  useEffect(() => {
    function refreshLogo () {
      if (window.innerWidth < 450) {
        setLogoSize("small")
      } else {
        setLogoSize("big")
      }
    }
    refreshLogo()
    window.addEventListener("resize", () => {
      refreshLogo()
    })
  }, [])
  return (
    <Link href="/">
      <div
        style={{
          margin: "0 auto",
          maxWidth: "50rem",
          padding: " 0.5em 0 0 0.5em",
          zIndex: "50",
        }}
      >
        {logoSize === "small" ? (
          <Image src="/img/logo.svg" height="30" width="30" />
        ) : (
          <>
            {/* {props.darkmode ? (
              <Image src="/img/logo_dark.svg" height="42" width="100" />
            ) : ( */}
            <Image src="/img/full_logo.svg" height="42" width="100" />
            {/* )} */}
          </>
        )}
      </div>
    </Link>
  )
}
