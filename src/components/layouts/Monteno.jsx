import { Link } from "react-router-dom";

const Montono = function ({ data }) {
  return (
    <section className="montono">
      <div className="container-fluid">
        <div className="row">
          {data.map((datum, index) => (
            <div key={index} className="col-xl-3 col-md-6">
              <div
                className="image-box"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img src={datum.img} alt={datum.title} />
                <div className="image-box__title">
                  <Link to={"/"} className="h6">
                    {datum.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Montono;
