import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import styl from "styles/css/snake.module.css"
import miniStyl from "styles/css/mini-games.module.css"
import Header from "comp/Header"

export default function Snake() {
  console.log("rerendering snake")
  const move = useRef("up")
  const fruit = useRef(null)
  const grid = useRef(null)
  const head = useRef({ x: 0, y: 1 })
  const snakeArr = useRef([
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
  ])

  useEffect(async () => {
    const root = document.querySelector(`.${styl.root}`)

    const moves = ["up", "down", "left", "right"]

    let headClass = styl.cell + " " + styl.head
    let bodyClass = styl.cell + " " + styl.body

    const g = await buildGrid(5, root)
    grid.current = g
    console.log(grid)
    setHeadposition(head.current)

    setInterval(async () => {
      reset(head.current)
      console.log("mv,", snakeArr.current)
      snakeArr.current.push(head.current)

      switch (move.current) {
        case "up":
          if (head.current.y === grid.current.max - 1)
            setHeadposition({ x: head.current.x, y: 0 })
          else setHeadposition({ x: head.current.x, y: head.current.y + 1 })
          break
        case "down":
          if (head.current.y === 0)
            setHeadposition({ x: head.current.x, y: grid.current.max - 1 })
          else setHeadposition({ x: head.current.x, y: head.current.y - 1 })
          break
        case "left":
          if (head.current.x === 0)
            setHeadposition({ x: grid.current.max - 1, y: head.current.y })
          else setHeadposition({ x: head.current.x - 1, y: head.current.y })
          break
        case "right":
          if (head.current.x === grid.current.max - 1)
            setHeadposition({ x: 0, y: head.current.y })
          else setHeadposition({ x: head.current.x + 1, y: head.current.y })
          break
        default:
          break
      }
      if (!(await isFruit(head.current))) snakeArr.current.shift()
      snakeArr.current.forEach((segment) => {
        grid.current.grid[segment.x][segment.y].className = bodyClass
      })
    }, 500)

    document.addEventListener("keydown", function (evt) {
      switch (evt.keyCode) {
        case 38:
          move.current = "up"
          break
        case 40:
          move.current = "down"
          break
        case 37:
          move.current = "left"
          break
        case 39:
          move.current = "right"
          break
      }
    })

    function setHeadposition({ x, y }) {
      console.log("headset, ", x, y)
      head.current = { x, y }
      grid.current.grid[x][y].className = headClass
    }
    async function isFruit({ x, y }) {
      console.log("current fruit", fruit.current, x, y)
      if (fruit.current.x === x && fruit.current.y === y) {
        console.log("is fruit")
        await spawnFruit()
        return true
      }
      console.log("isnot fruit")

      return false
    }

    await spawnFruit()
  }, [])
  //Helpers
  function createElementWithClass(type, className) {
    const element = document.createElement(type)
    element.className = className
    return element
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
    console.log("handling move, ", direction)
    move.current = direction
  }

  async function spawnFruit() {
    return new Promise((resolve) => {
      let allCells = []
      grid.current.grid.forEach((col) => {
        col.forEach((cell) => {
          allCells.push(cell)
        })
      })
      console.log("allCells = ", allCells)

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
        console.log(
          "Calc available - ",
          snakeArr.current,
          {
            x: parseInt(cell.dataset.x),
            y: parseInt(cell.dataset.y),
          },
          isAvailable,
          head.current
        )
        if (isAvailable) {
          return cell
        }
      })
      const idx = Math.floor(Math.random() * availableCells.length)
      console.log("availableCells = ", availableCells.length, idx)

      const fruitCell = availableCells[idx]

      console.log("fruitcell = ", fruitCell, fruitCell.dataset)
      fruit.current = {
        x: parseInt(fruitCell.dataset.x),
        y: parseInt(fruitCell.dataset.y),
      }
      grid.current.grid[fruitCell.dataset.x][fruitCell.dataset.y].className =
        styl.cell + " " + styl.fruit
      resolve()
    })
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
    <>
      <Head>
        <title>Snake</title>
      </Head>
      <Header />
      <h1 className={miniStyl.gameName}>Snake</h1>
      <div class={styl.root}></div>
      <div className={styl.controls}>
        <div className=""></div>

        <button onClick={() => handleMove("up")}>&#x2191;</button>
        <div className=""></div>
        <button onClick={() => handleMove("left")}>&#x2190;</button>
        <button onClick={() => handleMove("down")}>&#x2193;</button>
        <button onClick={() => handleMove("right")}>&#x2192;</button>
      </div>
    </>
  )
}
