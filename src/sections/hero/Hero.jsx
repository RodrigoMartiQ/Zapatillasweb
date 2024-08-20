import style from "./style.module.css";


function Hero() {
  return (
    <div className={style.container}>
      <div className={style.todo}>
        <img className={style.imagen1} src="/src/assets/imagenes/zapa2.jpg" />

        <div className={style.texto}>
          <h1 className={style.titulo}>
            NUEVOS <h2 className={style.intermedio}>MODELOS</h2> DE NIKE{" "}
          </h1>

          <p className={style.parrafo}>
            Incluyendo la nueva convinacion de colores, descubre lo ultimo de
            nike con CoolZap
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
