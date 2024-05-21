import { roboto } from "../fonts";
import Styles from "./Footer.module.scss";

export function Footer() {
  return (
    <div className={Styles.footerContainer}>
      <div className={roboto.className}>
        <p>Orlando - FL, 2024</p>
        <p>© Todos os direitos reservados</p>
        <p>
          Desenvolvido por{" "}
          <a href="https://github.com/leandroteixeira97" target="_blank">Leandro Aquino</a>
        </p>
      </div>
    </div>
  );
}
