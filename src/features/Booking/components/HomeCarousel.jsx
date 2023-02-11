import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
const HomeCarousel = () => {
  const banners = useSelector((state) => state.booking.banners);
  return (
    <Carousel draggable  >
      {banners.map((item) => (
        <div key={item.maBanner}>
          <img
            src={item.hinhAnh}
            alt=""
            className="h-100 w-full object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
