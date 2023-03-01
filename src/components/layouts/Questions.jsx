import { Accordion } from "react-bootstrap-accordion";

const Questions = function ({ data }) {
  return (
    <section className="questions">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="block-text center">
              <h1
                className="heading-bg"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <span style={{ color: "#fd562a" }}>FAQ</span>
              </h1>
              <h3
                className="title mb-28"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Frequently Asked <br /> Questions
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="flat-accordion" data-aos="fade-up">
              {data.map(function (datum, index) {
                return (
                  <Accordion
                    className="h5 toggle-title"
                    key={index}
                    title={datum.title}
                    show={datum.show}
                  >
                    <p className="fs-18">{datum.text}</p>
                  </Accordion>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
