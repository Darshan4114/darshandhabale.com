import Ripple from "./Ripple";
import styl from "styl/ButtonIcon.module.scss";

export default function ButtonIcon(props) {
  return (
    <Ripple
      shape="circle"
      button={true}
      handleRippleConClick={(e) => props?.onClick(e)}
    >
      <button className={styl.iconBtn}>{props.children}</button>
    </Ripple>
  );
}
