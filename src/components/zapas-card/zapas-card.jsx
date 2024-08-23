import style from "./style.module.css";

export default function BurgerCard({ title, img, price }) {
  return (
    <div className={style.container}>
      <a className={style.favorites}><i class="bi bi-heart"></i></a>
      <img src={img} alt="zapas" className={style.image} />
      <div className={style.texto}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.price}>$ {price}</p>
      </div>
    </div>
  );
}