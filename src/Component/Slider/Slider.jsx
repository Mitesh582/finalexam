import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Slider() {
    const images = [
        { url: "img/banner1.jpg" },
        { url: "img/banner2.jpg" },
        { url: "img/banner3.jpg" },
      ];
  return (
    <>
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"91vh"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
    </>
  )
}

export default Slider