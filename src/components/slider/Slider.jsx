import { useState } from "react";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import item from "../../assets/data/item";

const Slider = () => {
  const [datatext] = useState({
    subtitle: "We are Monteno NFT",
    title: "Collect Next Generation NFTs Today",
    desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantim",
  });
  return (
    <section className="tf-section hero-slider">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-6 col-12">
            <div className="block-text pt-24">
              <h6 className="sub-title mb-6" data-aos="fade-up">
                {datatext.subtitle}
              </h6>
              <h2 className="title mb-26" data-aos="fade-up">
                {datatext.title}
              </h2>
              <p className="desc mb-43">{datatext.desc}</p>
              <Link
                to="/"
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Get Connected
              </Link>
            </div>
          </div>
          <div className="col-xl-7 col-md-6 col-12">
            <div className="content-right d-flex">
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className="item bg-2">
                    <img src={item.item1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-1">
                    <img src={item.item2} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-2">
                    <img src={item.item1} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-1">
                    <img src={item.item2} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  reverseDirection: true,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className="item bg-2">
                    <img src={item.item3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-1">
                    <img src={item.item4} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-2">
                    <img src={item.item5} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-3">
                    <img src={item.item3} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-4">
                    <img src={item.item3} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <Swiper
                modules={[Autoplay]}
                direction={"vertical"}
                spaceBetween={30}
                slidesPerView={3}
                loop
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={2000}
              >
                <SwiperSlide>
                  <div className="item bg-2">
                    <img src={item.item6} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-1">
                    <img src={item.item7} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-2">
                    <img src={item.item4} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-3">
                    <img src={item.item6} alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item bg-4">
                    <img src={item.item7} alt="" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
