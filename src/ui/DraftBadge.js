// import { fontFamily } from "@mui/system"
// import { Text } from "theme-ui"

const DraftBadge = (props) => (
  <span
    style={{
      bg: "#b33f40",
      color: "white",
      fontWeight: 400,
      fontSize: "1rem",
      borderRadius: 20,
      py: 2,
      px: 2,
      position: "absolute",
      top: "-3px",
      left: "-60px",
      borderRadius: "2px",
      fontFamily: "Ovo",
    }}
  >
    Draft
  </span>
)

export default DraftBadge
