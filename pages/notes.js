import {useState, useEffect} from "react"

export default function Notes() {
  const [noteList, setNoteList] = useState([])

  useEffect(() => {
    fetch(process.env.API_URL).then((res) => {
      setNoteList(res)
    })
  }, [])

  async function addNote(data) {
    console.log(data)
    fetch(process.env.API_URL)
      .then((res) => console.log("note added"))
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      {noteList && noteList.length > 0 && (
        <ol>
          {notelist.map((note) => (
            <li>{note}</li>
          ))}
        </ol>
      )}
      <form method="POST" onSubmit={addNote}>
        <label htmlFor="title">Title</label>
        <input name="title" id="title" />
        <input type="submit" />
      </form>
    </div>
  )
}
