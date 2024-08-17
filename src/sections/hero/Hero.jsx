import  style from "./style.module.css"

function Hero(){
return(
    <div className={style.container}>
    <div className={style.todo}>
        <img className={style.imagen1 }src="./imagenes/zaparoja.jpg"/>
        
        <div className={style.texto}>
        <h1 className={style.titulo}>HOLA  PEDRO</h1>
        <p className={style.parrafo}>pedro sanchez</p>
        </div>
    </div>
    </div>



);
}
export default Hero;