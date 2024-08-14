import style from "./style.module.css";

function Navbar() {
  return (
    <header className={style.navbar}>
      <div className={style.container}>
        <div className={style.navlimite}>
          <h1 className={style.marca}>CoolZap</h1>

          <ul className={style.navlista}>
            <a className={style.links} href="#inicio">
              Incio
            </a>
            <a className={style.links} href="#tienda">
              Tienda
            </a>
            <a className={style.links} href="#contacto">
              Contacto
            </a>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
