import { useState } from "react";

export default function Carousel() {
  const images = ["zapa1.jpg", "zapa2.jpg", "zapa3.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;

    setSelectedIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const previous = () => {
    selectNewImage(selectedIndex, false);
  };

  const next = () => {
    selectNewImage(selectedIndex);
  };

  return (
    <>
      <button onClick={previous}>Prev</button>
      <img
        src={require(`/src/assets/imagenes/${selectedImage}`)}
        alt="carousel"
      />
      <button onClick={next}>Next</button>
    </>
  );
}

