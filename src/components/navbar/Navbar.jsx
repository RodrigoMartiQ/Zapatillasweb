import React from "react";
import style from "./style.module.css";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <header  className={style.navbar} >
      <div   className={style.container}>
        <div className={style.navlimite}>
        <div>
          <Link  className={style.marca} to= "/" >
          CoolZap.
          </Link>
          </div>

          <div className={style.centro}>
            <ul className={style.navlista}>
              <Link className={style.links} to="/">
                Inicio
              </Link> 
             
              <Link className={style.links} to="/Store">Tienda</Link> 
                
             
              <a className={style.links} href="#ofertas">
                Ofertas
              </a>
            </ul>
          </div>

          <div className={style.derecha}>
            <ul className={style.navlista}>
              <a className={style.links} href="#lupa">
              <i class="bi bi-search"></i>
              </a>
              <Link className={style.links} to="/Favorites"><i class="bi bi-heart"></i></Link>
              
              <Link className={style.links} to="/Cart"><i class="bi bi-cart"></i>
              </Link>
              
              
              
            </ul>
          </div>
        </div>
      </div>
      <Outlet/>
      </header>
  );
}
export default Navbar;
