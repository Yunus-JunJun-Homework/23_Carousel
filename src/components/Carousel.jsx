import React, { Children } from 'react';
import { Carousel } from 'bootstrap';

const Slider = (props) => {
  const imgArr = props.images;

  const imgNum = imgArr.map((item, index) => {
    const activeImg = index === 0 ? 'carousel-item active' : 'carousel-item';
    return (
      <div className={activeImg} key={index}>
        <img alt="" className="d-block w-100" src={item} />
      </div>
    );
  });

  // Second variant with the OBJECT

  // const imgNum = imgArr.map((number, index) => {
  //   const activeImg = index === 0 ? 'carousel-item active' : 'carousel-item';
  //   return (
  //     <div className={activeImg} key={number.id}>
  //       <img alt="" className="d-block w-100" src={number.image} />
  //     </div>
  //   );
  // });

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">{imgNum}</div>
      <button
        className="carousel-control-prev"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        data-bs-target="#carousel"
        type="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;
