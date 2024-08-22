import style from "./style.module.css"


function Miembro(){

return(
<div className={style.container}>
      <div className={style.todo}>
        <img className={style.imagen} src="./public/imagenes/final.jpg" alt="" />

        <div className={style.texto}>
          <h1 className={style.titulo}>
            QUIERES SER MIEMBRO?
          </h1>

          <p className={style.parrafo}>
          Obtén un 10% de descuento por cada compra
          </p>
          <a className={style.boton} href="#ingresar">
            Ingresa
          </a>
        </div>
      </div>
    </div>






);
}
export default Miembro;