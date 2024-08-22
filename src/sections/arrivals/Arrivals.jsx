import style from "./style.module.css";
import BurguerCard from "../../components/zapas-card/zapas-card";

function Arrivals() {
  return (
    <div className={style.container}>
      <div className={style.todo}>
        <div className={style.texto}>
          <h1>Recién llegados</h1>
          <a className={style.vertodo} href="#tienda">
            Ver todos
          </a>
        </div>

        <div className={style.zapas}>
          <BurguerCard
            title="Air Jordan Retro"
            img="./public/imagenes/cards/card5.png"
            price="429.52"
          />
          <BurguerCard
            title="Puma XZ Retro"
            img="./public/imagenes/cards/card6.png"
            price="289.44"
          />
          <BurguerCard
            title="Nike Viper 23"
            img="./public/imagenes/cards/card7.png"
            price="222.88"
          />
          <BurguerCard
            title="Nike Shox TL"
            img="./public/imagenes/cards/card8.png"
            price="449.52"
          />
        </div>
      </div>
    </div>
  );
}
export default Arrivals;
