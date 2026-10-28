export default function Footer() {
  return (
    <footer
      style={{
        background: "#222433",
        color: "white",
        height: "3rem",
        boxSizing: "border-box",
        padding: "0 1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <p style={{ fontSize: "0.9rem", fontFamily: "sans-serif", margin: 0 }}>
        DarshanDev &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
