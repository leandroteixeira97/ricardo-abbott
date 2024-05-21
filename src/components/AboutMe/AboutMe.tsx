import { bebas_neue, roboto } from "../fonts";
import Styles from "./AboutMe.module.scss";

export function AboutMe() {
  return (
    <div className={Styles.aboutMeContainer}>
      <h2 className={bebas_neue.className}>Sobre mim</h2>
      <div className={roboto.className}>
        <p>
          Olá, sou Ricardo Abbott, diretor comercial do Grupo Zumba. Resido em
          Orlando há 7 anos e sou pai de um filho autista. Em meu perfil
          <span>
            {" "}
            <a
              href="https://www.instagram.com/abbottzumbavistos"
              target="_blank"
            >
              @abbottzumbavistos
            </a>
          </span>
          , compartilho minhas experiências nos EUA e ofereço insights valiosos
          para aqueles que aspiram realizar o sonho da imigração.
        </p>
        <p>
          Minha missão é proporcionar um caminho mais rápido e facilitado para a
          imigração. Com nossos serviços, você terá a orientação necessária para
          alcançar o sucesso nos EUA. Como empresário, estive à frente de duas
          grandes empresas e hoje integro o Grupo Zumba, uma instituição com 25
          anos de tradição, dedicada a te ajudar conquistar uma vida próspera
          nos Estados Unidos de maneira legal e segura juridicamente.
        </p>
        <p>
          Conte comigo e com o Grupo Zumba para tornar sua imigração uma jornada
          tranquila e bem-sucedida. <span> Juntos, faremos do seu sonho americano uma
          realidade concreta.</span>
        </p>
        <div className={Styles.signature}>
          <p>Ricardo Abbott</p>
          <p>Diretor Comercial</p>
        </div>
      </div>
    </div>
  );
}
