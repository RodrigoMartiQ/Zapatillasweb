import style from "./style.module.css";

function Navbar() {
  return (
    <header className={style.navbar}>

      <div className={style.container}>

        <div className={style.navlimite}>
          
          <div className={style.marca}>
          <h1 >CoolZap.</h1>
          </div>
          
          <div className={style.centro}>
          <ul className={style.navlista}>
            <a className={style.links} href="#inicio">
              Inicio
            </a>
            <a className={style.links} href="#tienda">
              Tienda
            </a>
            <a className={style.links} href="#contacto">
              Contacto
            </a>
          </ul>
          </div>

          <div className={style.derecha}>
          <ul className={style.navlista}>
          <a className={style.links} href="#lupa">
              L
            </a>
            <a className={style.links} href="#favoritos">
              F
            </a>
            <a className={style.links} href="#carritos">
              C
            </a>
            </ul>
            </div> 
            
        </div>
      </div>
    </header>
  );
}
export default Navbar;
