import BurguerCard from "../../components/zapas-card/zapas-card";
import style from "./style.module.css";

function Trending() {
  return (
    <div className={style.container}>
      <div className={style.todo}>
        <div className={style.texto}>
          <h1>En tendencias</h1>
          <a className={style.vertodo} href="#tienda">
            Ver todos
          </a>
        </div>

        <div className={style.zapas}>
          <BurguerCard
            title="Air Jordan Retro"
            img="./public/imagenes/cards/card1.png"
            price="230.52"
          />
          <BurguerCard
            title="Nike Air Max Plus"
            img="./public/imagenes/cards/card2.png"
            price="129.99"
          />
          <BurguerCard
            title="Nike Viper 23"
            img="./public/imagenes/cards/card3.png"
            price="239.52"
          />
          <BurguerCard
            title="Nike Shox TL"
            img="./public/imagenes/cards/card4.png"
            price="529.52"
          />
        </div>
      </div>
    </div>
  );
}
export default Trending;
