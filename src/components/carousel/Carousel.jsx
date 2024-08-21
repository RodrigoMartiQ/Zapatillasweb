import { useState } from "react";
import style from "./style.module.css";

function Carousel({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  const nextImage = () => {
    setSelectedImage((selectedImage + 1) % images.length);   /* el % es para que cuando llegue al final vuelva al principio */
  };

  const prevImage = () => {
    setSelectedImage((selectedImage - 1 + images.length) % images.length); /* el .lenght te da la cantidad de elementos en un array o el numero de caracteres en una cadena de texto  */
  };

  return (

    <div className={style.carousel}>
      <button className={style.navButton} onClick={prevImage}>
      <i class="bi bi-chevron-left"></i>
      </button>

      <img
        className={style.imagen}
        src={images[selectedImage]}
      />

      <button className={style.navButton} onClick={nextImage}>
      <i class="bi bi-chevron-right"></i>
      </button>

    </div>
  );
}

export default Carousel;