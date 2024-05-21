import { Hero } from "@/components/Hero/Hero";
import { ReactElement } from "react";
import { Layout } from "../components/Layout";
import { LinkContainer } from "@/components/LinkContainer/LinkContainer";
import { LinkProps } from "@/components/Link/Link";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import Styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={Styles.homeContainer}>
      <div className={Styles.heroContainer}>
        <Hero
          name={"Ricardo Abbott"}
          slogan={"Diretor especialista em Vistos EUA"}
          briefDescription={"Da empresa ao Green Card, te guio ao sucesso nos EUA"}
        />
      </div>
      <div className={Styles.linkContainer}>
        <LinkContainer links={links} />
      </div>
      <div className={Styles.descriptionContainer}>
        <AboutMe />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

const links: LinkProps[] = [
  {
    url: "https://wa.me/14075802301",
    label: "Fale comigo",
    icon: "whatsapp",
  },
  {
    url: "https://www.instagram.com/abbottzumbavistos",
    label: "Me siga no instagram",
    icon: "instagram",
  },
  {
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfyCRsyMnEbkCF4l3uNCmRJTq1APOhRWMwbGMsBu6hoGCNEbQ/viewform",
    label: "Verifique sua elegibilidade para o Green Card",
    icon: "page"
  }
];
