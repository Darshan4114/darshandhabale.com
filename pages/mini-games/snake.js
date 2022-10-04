import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react"
import Head from "next/head"
import styl from "styles/css/snake.module.css"
import miniStyl from "styles/css/mini-games.module.css"
import Header from "comp/Header"

export default function Snake() {
  const move = useRef("up")
  const fruit = useRef(null)
  const grid = useRef(null)
  const scoreBoard = useRef(null)
  const head = useRef({x: 0, y: 1})
  const snakeArr = useRef([
    {x: 1, y: 1},
    {x: 2, y: 1},
    {x: 3, y: 1},
  ])

  const moves = ["up", "down", "left", "right"]

  let headClass = styl.cell + " " + styl.head
  let bodyClass = styl.cell + " " + styl.body

  useEffect(async () => {
    const root = document.querySelector(`.${styl.root}`)

    const g = await buildGrid(5, root)
    grid.current = g
    setHeadposition(head.current)

    setInterval(async () => {
      reset(head.current)
      snakeArr.current.push(head.current)

      switch (move.current) {
        case "up":
          if (head.current.y === grid.current.max - 1)
            setHeadposition({x: head.current.x, y: 0})
          else setHeadposition({x: head.current.x, y: head.current.y + 1})
          break
        case "down":
          if (head.current.y === 0)
            setHeadposition({x: head.current.x, y: grid.current.max - 1})
          else setHeadposition({x: head.current.x, y: head.current.y - 1})
          break
        case "left":
          if (head.current.x === 0)
            setHeadposition({x: grid.current.max - 1, y: head.current.y})
          else setHeadposition({x: head.current.x - 1, y: head.current.y})
          break
        case "right":
          if (head.current.x === grid.current.max - 1)
            setHeadposition({x: 0, y: head.current.y})
          else setHeadposition({x: head.current.x + 1, y: head.current.y})
          break
        default:
          break
      }
      const isFr = await isFruit(head.current)
      if (!isFr) snakeArr.current.shift()
      checkCut()
      if (isFr) {
        scoreBoard.current.addScore()
      }

      snakeArr.current.forEach((segment) => {
        grid.current.grid[segment.x][segment.y].className = bodyClass
      })
    }, 400)

    document.addEventListener("keydown", function(evt) {
      switch (evt.keyCode) {
        case 38:
          if (move.current !== "down") move.current = "up"
          break
        case 40:
          if (move.current !== "up") move.current = "down"
          break
        case 37:
          if (move.current !== "right") move.current = "left"
          break
        case 39:
          if (move.current !== "left") move.current = "right"
          break
      }
    })

    await spawnFruit()
  }, [])
  //Helpers
  function createElementWithClass(type, className) {
    const element = document.createElement(type)
    element.className = className
    return element
  }

  function setHeadposition({x, y}) {
    head.current = {x, y}
    grid.current.grid[x][y].className = headClass
  }
  async function isFruit({x, y}) {
    if (fruit.current.x === x && fruit.current.y === y) {
      await spawnFruit()
      return true
    }
    return false
  }

  const buildGrid = (size, root) => {
    return new Promise((resolve, reject) => {
      let grid = []
      for (let i = 0; i < size; i++) {
        let col = []
        for (let j = 0; j < size; j++) {
          const cell = createElementWithClass("div", styl.cell)
          cell.dataset.x = i
          cell.dataset.y = j
          col.push(cell)
          root.appendChild(cell)
        }
        grid.push(col)
      }
      resolve({
        grid,
        max: size,
      })
    })
  }

  function handleMove(direction) {
    if (
      (move.current === "up" && direction !== "down") ||
      (move.current === "left" && direction !== "right") ||
      (move.current === "down" && direction !== "up") ||
      (move.current === "right" && direction !== "left")
    )
      move.current = direction
  }

  function spawnFruit() {
    return new Promise((resolve) => {
      let allCells = []
      grid.current.grid.forEach((col) => {
        col.forEach((cell) => {
          allCells.push(cell)
        })
      })

      let availableCells = allCells.filter((cell) => {
        const isAvailable =
          snakeArr.current.filter((segment) => {
            return (
              (segment.x === parseInt(cell.dataset.x) &&
                segment.y === parseInt(cell.dataset.y)) ||
              (parseInt(cell.dataset.x) === head.current.x &&
                parseInt(cell.dataset.y) === head.current.y)
            )
          }).length === 0

        if (isAvailable) {
          return cell
        }
      })
      const idx = Math.floor(Math.random() * availableCells.length)

      const fruitCell = availableCells[idx]

      fruit.current = {
        x: parseInt(fruitCell.dataset.x),
        y: parseInt(fruitCell.dataset.y),
      }
      grid.current.grid[fruitCell.dataset.x][fruitCell.dataset.y].className =
        styl.cell + " " + styl.fruit
      resolve()
    })
  }

  function checkCut() {
    const isCut = snakeArr.current.filter((segment) => {
      return segment.x === head.current.x && segment.y === head.current.y
    })
    if (isCut.length) {
      const cutIdx = snakeArr.current.indexOf(isCut[0])
      snakeArr.current = snakeArr.current.slice(cutIdx)
    }
  }

  function reset(headPosition) {
    grid.current.grid.forEach((col) => {
      col.forEach((cell) => {
        // if (!cell.classList.contains(styl.fruit))
        cell.setAttribute("class", styl.cell)
      })
    })
    grid.current.grid[fruit.current.x][fruit.current.y].className =
      styl.cell + " " + styl.fruit
    grid.current.grid[headPosition.x][headPosition.y].className =
      styl.cell + " " + styl.head
  }

  return (
    <div className={styl.container}>
      <div className={styl.internalContainer}>
        <Head>
          <title>Snake</title>
        </Head>
        <Header />
        <h1 className={miniStyl.gameName} >
          Snake
        </h1>
        <Score ref={scoreBoard} />
        <div class={styl.root}></div>
        <div className={styl.controls}>
          <div className=""></div>

          <button onClick={() => handleMove("up")}>&#x2191;</button>
          <div className=""></div>
          <button onClick={() => handleMove("left")}>&#x2190;</button>
          <button onClick={() => handleMove("down")}>&#x2193;</button>
          <button onClick={() => handleMove("right")}>&#x2192;</button>
        </div>
      </div>
    </div>
  )
}

const Score = forwardRef((props, ref) => {
  const [score, setScore] = useState(100)
  useImperativeHandle(ref, () => ({
    addScore: () => {
      setScore(score + 100)
    },
  }))
  return <h2 className={styl.score}>{score}</h2>
})
