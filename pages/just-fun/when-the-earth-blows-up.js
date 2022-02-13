import { useState, useEffect } from "react"
import Image from "next/image"
import styl from "styl/when-the-earth-blows-up.module.css"

export default function whenTheEarthBlowsUp() {
  const [asteroidClass, setAsteroidClass] = useState(styl.asteroid)
  const [neoData, setNeoData] = useState(null)

  useEffect(async () => {
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${
        new Date().toISOString().split("T")[0]
      }&api_key=DEMO_KEY`
    )
    const data = await res.json()
    setNeoData(data)
  }, [])

  function launchAsteroid() {
    const asteroidSound = new Audio("/audio/just-fun/asteroid.wav")
    asteroidSound.play()
    setAsteroidClass(`${styl.asteroid} ${styl.moveAsteroid}`)
    setTimeout(() => setAsteroidClass(styl.asteroid), 2500)
  }

  return (
    <div className={styl.container}>
      <div className={asteroidClass}>
        <Image
          src="/img/just-fun/asteroid.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styl.hero}>
        <h1>When the earth blows up</h1>
        <h2>Latest data about top NEOs (Near Earth Objects) </h2>

        <button onClick={launchAsteroid}>Launch Asteroid</button>
      </div>
      <div className={styl.neoDataContainer}>
        {neoData && <p>{JSON.stringify(neoData)}</p>}
      </div>
    </div>
  )
}
