const RoadMap = function ({ data }) {
  return (
    <section className="road-map">
      {/* titles for the section */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="block-text center">
              <h1
                className="heading-bg"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span>Road Map</span>
              </h1>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                The Journey of <br />
                Monteno NFT
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* data will come from api */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="road-map__content s1">
              {data.map((datum, index) => (
                <div
                  key={index}
                  className={`box-time ${datum.class}`}
                  data-aos="fade-in"
                >
                  <p className="fs-16 color-main mb-0">{datum.time}</p>
                  <h5 className="title mb-20">{datum.title}</h5>
                  <p className="fs-18">{datum.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMap;
