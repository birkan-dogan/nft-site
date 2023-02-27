import { Link } from "react-router-dom";

const Portfolio = function ({ data }) {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h1
                className="heading-bg"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span>Join</span>
              </h1>
              <h5
                className="sub-title mb-10"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Join NFT Portfolio
              </h5>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Become a Monteno <br />
                Player Now{" "}
              </h3>
            </div>
          </div>
        </div>
        <div className="row mt-61">
          {data.map(function (datum, index) {
            return (
              <div key={index} className="col-md-6">
                <div className="icon-box bg-2" data-aos="fade-up">
                  <div className="icon">
                    <img src={datum.img} alt={datum.title} />
                  </div>
                  <div className="content">
                    <p className="fs-16 color-main">{datum.step}</p>
                    <Link to={"/"} className="h5">
                      {datum.title}
                    </Link>
                    <p className="fs-18">{datum.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
