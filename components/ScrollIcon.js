import styl from "styl/ScrollIcon.module.scss"

export default function ScrollIcon(props) {
  return (
    <div className={styl.container}>
      <svg
        width={props.width ? props.width : "2rem"}
        viewBox="0 0 14.334 24.75"
      >
        <circle
          className={styl.circle1}
          fill={props.color ? props.color : "#777"}
          cx="7.167"
          cy="6"
          r="1.2"
        />
        <circle
          className={styl.circle2}
          fill={props.color ? props.color : "#777"}
          cx="7.167"
          cy="6"
          r="1.2"
        />
        <path
          stroke={props.color ? props.color : "#777"}
          fill="transparent"
          d="M7.167,0.5C3.485,0.5,0.5,3.485,0.5,7.167v10.416                   c0,3.682,2.985,6.667,6.667,6.667s6.667-2.985,6.667-6.667V7.167C13.834,3.485,10.849,0.5,7.167,0.5z"
        />
      </svg>
    </div>
  )
}
