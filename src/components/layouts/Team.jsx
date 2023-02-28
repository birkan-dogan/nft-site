import { Swiper } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper";
import { SwiperSlide } from "swiper/react";

const Team = function ({ data }) {
  return (
    <section className="team">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h1
                className="heading-bg"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span>Team</span>
              </h1>
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Team Members
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Our Amazing Team <br />
                Members
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-53">
          <div className="col-md-12">
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={30}
              pagination={{ clickable: true }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                767: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 4,
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {data.map((datum, index) => (
                <SwiperSlide key={index}>
                  <div className="team-box">
                    <div className="img-team">
                      <img src={datum.img} alt="" className="" />
                      <div className="social">
                        <p>
                          <a href="#">
                            <i className="fab fa-linkedin"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter-square"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-telegram"></i>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="team-info">
                      <a href="#" className="h5">
                        {datum.name}
                      </a>
                      <p className="fs-16">{datum.position}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
