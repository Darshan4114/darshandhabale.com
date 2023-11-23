import Link from "next/link"

const NavLink = ({ href, active, children }) => (
  <Link href={href}>
    {children}
  </Link>
)

export default NavLink
