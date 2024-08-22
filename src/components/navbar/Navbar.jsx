import style from "./style.module.css";

function Navbar() {
  return (
    <header id="nav" className={style.navbar}>
      <div className={style.container}>
        <div className={style.navlimite}>
        <div>
          <a className={style.marca} href="#nav">
          CoolZap.
              </a>
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
              <i class="bi bi-search"></i>
              </a>
              <a className={style.links} href="#favoritos">
              <i class="bi bi-heart"></i>
              </a>
              <a className={style.links} href="#carritos">
              <i class="bi bi-cart"></i>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
