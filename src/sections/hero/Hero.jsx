import  style from "./style.module.css"

function Hero(){
return(
    <div className={style.container}>
    <div>
        <img className={style.imagen1 }src="./imagenes/zaparoja.jpg"/>
        <div>
        <h1 className={style.holapedro}>HOLA  PEDRO</h1>
        </div>
    </div>
    </div>



);
}
export default Hero;