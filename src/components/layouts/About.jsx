import { Link } from "react-router-dom";
import item from "../../assets/data/item";

const About = function () {
  const data = {
    subtitle: "About Us",
    title: "High Quality NFT Collections",
    desc1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta a praesentium distinctio aut quam sit ex et quaerat modi ad tenetur.",
    desc2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dicta a praesentium distinctio aut quam sit ex et quaerat modi ad tenetur.",
  };
  return (
    <section className="section-about">
      <div className="container">
        <div className="row reverse">
          <div className="col-xl-7 col-md-12">
            <div className="group-image">
              <div className="left">
                <div className="item bg-1">
                  <img src={item.item8} alt="" />
                </div>
              </div>
              <div className="right">
                <div className="item bg-2">
                  <img src={item.item9} alt="" />
                </div>
                <div className="item bg-3">
                  <img src={item.item10} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="block-text pt-12">
              <h5 className="mb-10" data-aos="fade-up" data-aos-duration="1000">
                {data.subtitle}
              </h5>
              <h3
                className="title mb-58"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.title}
              </h3>
              <p
                className="fs-21 mb-33"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc1}
              </p>
              <p
                className="fs-18 line-h17 mb-41"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {data.desc2}
              </p>
              <Link
                className="btn-action style-2"
                data-aos="fade-up"
                data-aos-duration="1200"
                to={"/"}
              >
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
