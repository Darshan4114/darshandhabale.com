export default function Footer() {
  return (
    <footer
      style={{
        background: "#222433",
        fontSize: "0.7rem",
        color: "white",
        textAlign: "center",
        padding: "1em",
      }}
    >
      <p>DarshanDev &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
