import iconDollar from '../assets/icon-dollar.svg'

const Tipper = () => {
  return (
    <section className="container">
      <div className="left-side">
          <div className="input-div">
              <img src={iconDollar} alt="" />
          </div>
      </div>
      <div className="right-side"></div>
    </section>
  );
};

export default Tipper;
