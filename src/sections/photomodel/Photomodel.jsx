import style from "./style.module.css";

function Photomodel() {
  return (
    <div className={style.container}>
      <div className={style.todo}>
        <h1 className={style.texto}>Comprar por coleccion</h1>
        <div className={style.fotosmodelos}>
        <img className={style.fotos} src="./public/imagenes/poses/pose1.jpg" />
        <img className={style.fotos} src="./public/imagenes/poses/pose2.jpg" />
        <img className={style.fotos} src="./public/imagenes/poses/pose3.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Photomodel;
