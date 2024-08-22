import Carousel from "../../components/carousel/Carousel";
import style from "./style.module.css";

function Hero() {
  const images = [
    "/public/imagenes/zapa1.jpg",
    "/public/imagenes/zapa2.jpg",
    "/public/imagenes/zapa3.jpg",
  ];

  return (
    <div className={style.container}>
      <div className={style.todo}>
        <Carousel images={images} />

        <div className={style.texto}>
          <h1 className={style.titulo}>
            NUEVOS <h2 className={style.intermedio}>MODELOS</h2> DE NIKE
          </h1>

          <p className={style.parrafo}>
            Incluyendo la nueva convinacion de colores, descubre lo último de
            Nike con CoolZap
          </p>
          <a className={style.boton} href="#tienda">
            Compra ahora
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
