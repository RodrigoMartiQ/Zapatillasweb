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
            title="Nike P-6000"
            img="./public/imagenes/cards/card5.png"
            price="175.00"
          />
          <BurguerCard
            title="Nike Dunk"
            img="./public/imagenes/cards/card6.png"
            price="209.99"
          />
          <BurguerCard
            title="Nike Air Force"
            img="./public/imagenes/cards/card7.png"
            price="120.99"
          />
          <BurguerCard
            title="Jordan Spizike"
            img="./public/imagenes/cards/card8.png"
            price="124,99"
          />
        </div>
      </div>
    </div>
  );
}
export default Arrivals;
