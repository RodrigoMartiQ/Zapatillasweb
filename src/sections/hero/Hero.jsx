import  style from "./style.module.css"

function Hero(){
return(
    <div>
        <img className={style.imagen1 }src="./public/imagenes/zaparoja.jpg" alt="" />
        <h1 className={style.holapedro}>HOLA  PEDRO</h1>
    </div>




);
}
export default Hero;