import style from "./style.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        
          <div className={style.info}>
            <a className={style.marca} href="#nav">
              CoolZap.
            </a>
          </div>

          <div className={style.info}>
            <h1>Metodos de pago:</h1>
            <p>Transferencia</p>
            <p>Efectivo</p>
            <p>Tarjeta de credito</p>
          </div>

          <div className={style.info}>
            <h1>¿Donde estamos?</h1>
            <p>Envios a todo el mundovich</p>
            <p>Nuestra sucursal:</p>
            <p>Monte Everest</p>
          </div>

          <div className={style.info}>
            <h1>Contactanos</h1>
            <p>ivandepineda@gmail.com</p>
            <p>351-3864351128906403800</p>
          </div>
        
      </div>
    </footer>
  );
}
export default Footer;
