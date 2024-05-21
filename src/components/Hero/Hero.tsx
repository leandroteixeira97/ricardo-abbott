import { ProfilePicture } from "../ProfilePicture/ProfilePicture";
import { bebas_neue, roboto } from "../fonts";
import Styles from "./Hero.module.scss";

export function Hero(props: HeroProps) {
  return (
    <div className={Styles.heroContainer}>
      <video className={Styles.backgroundVideo} autoPlay loop muted>
        <source src={"/desktop-hero-background.mp4"} type="video/mp4" />
      </video>
      <div className={Styles.headingContainer}>
        <div>
          <ProfilePicture />
          <h2 className={bebas_neue.className}>{props.name}</h2>
          <h6 className={roboto.className}>{props.slogan}</h6>
        </div>
        <p className={roboto.className}>{props.briefDescription}</p>
      </div>
    </div>
  );
}

interface HeroProps {
  name: string;
  slogan: string;
  briefDescription: string;
}
