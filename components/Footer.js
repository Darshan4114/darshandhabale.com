export default function Footer() {
  return (
    <footer
      style={{
        background: "#222433",
        fontSize: "0.7rem",
        color: "white",
        textAlign: "center",
        padding: "1em",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <p>DarshanDev &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
