import Styles from "./Link.module.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { bebas_neue } from "../fonts";

export function Link(props: LinkProps) {
  return (
    <div className={Styles.linkContainer}>
      {props.icon && (
        <div className={Styles.iconContainer}>{LinkMap[props.icon]}</div>
      )}
      <a className={bebas_neue.className} href={props.url}>
        {props.label}
      </a>
    </div>
  );
}

export interface LinkProps {
  url: string;
  label: string;
  icon?: "whatsapp" | "instagram" | "facebook" | "page";
}

const LinkMap = {
  whatsapp: <WhatsAppIcon className={Styles.icon} fontSize="large" sx={{ color: "#002868" }} />,
  instagram: <InstagramIcon className={Styles.icon} fontSize="large" sx={{ color: "#002868" }} />,
  facebook: <FacebookIcon className={Styles.icon} fontSize="large" sx={{ color: "#002868" }} />,
  page: <TravelExploreIcon className={Styles.icon} fontSize="large" sx={{ color: "#002868" }} />,
};
