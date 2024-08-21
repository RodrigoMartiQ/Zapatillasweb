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

        <div className={style.zapascard}>
          <BurguerCard title="Bacon Cheese" img="" price="100" />
          <BurguerCard title="Bacon cheese Double" img="" price="150" />
          <BurguerCard title="Quarter" img="" price="200" />
          <BurguerCard title="Angus Mushroom" img="" price="250" />
        </div>
      </div>
    </div>
  );
}
export default Trending;
