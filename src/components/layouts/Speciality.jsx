import { Link } from "react-router-dom";

const Speciality = function ({ data }) {
  const fakeData = {
    subtitle: "About Us",
    title: "High Quality NFT Collections",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta a praesentium distinctio aut quam sit ex et quaerat modi ad tenetur.",
  };

  return (
    <section className="section-speciality">
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-md-12">
            <div className="block-text pt-128 pd-0">
              <h5 className="mb-10" data-aos="fade-up" data-aos-duration="1000">
                {fakeData.subtitle}
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {fakeData.title}
              </h3>
              <p className="fs-21" data-aos="fade-up" data-aos-duration="1000">
                {fakeData.desc}
              </p>
            </div>
          </div>
          <div className="col-xl-7 col-md-12">
            <div className="section-speciality__box">
              {data.map(function (data, index) {
                return (
                  <div
                    key={index}
                    className={`box-item bg-2 ${data.class}`}
                    data-aos="flip-left"
                  >
                    <h3 className="color-main">{data.stt}</h3>
                    <Link to={"/"} className="h5">
                      {data.title}
                    </Link>
                    <p>{data.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speciality;
