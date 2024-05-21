import { roboto } from "../fonts";
import Styles from "./Navbar.module.scss";

export function Navbar() {
  return (
    <div className={Styles.navbarContainer}>
      <div className={Styles.logoContainer}>
        <div className={roboto.className}>
          Ricardo <span>Abbott</span>
        </div>
        <div className={`${roboto.className} ${Styles.subtitle}`} >by Grupo Zumba</div>
      </div>
      {/* <div className={Styles.menuContainer}>
        <MenuIcon fontSize="large" sx={{ color: "white" }} />
      </div> */}
    </div>
  );
}
