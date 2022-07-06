import styl from "styles/css/Ripple.module.css";
export default function Ripple(props) {
  function createRipple(event) {
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - buttonRect.left - radius}px`;
    circle.style.top = `${event.clientY - buttonRect.top - radius}px`;
    circle.classList.add(styl.ripple);
    if (props.light) {
      circle.classList.add(styl.rippleLight);
    }
    const ripple = button.getElementsByClassName(styl.ripple)[0];

    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  }

  return (
    <div
      className={`${styl.rippleContainer} ${props.button ? styl.button : ""} ${
        props.shape === "circle" ? styl.circle : ""
      }`}
      onClick={(e) => {
        createRipple(e);
        props.handleRippleConClick && props.handleRippleConClick(e);
      }}
    >
      {props.children}
    </div>
  );
}
