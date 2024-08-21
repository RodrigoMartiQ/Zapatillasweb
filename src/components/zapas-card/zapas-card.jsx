import style from "./style.module.css";

export default function BurgerCard({ title, img, price }) {
  return (
    <div className={style.container}>
      <img src={img} alt="Burger" className={style.image} />
      <h3 className={style.title}>{title}</h3>
      <p className={style.price}>$ {price}</p>
    </div>
  );
}