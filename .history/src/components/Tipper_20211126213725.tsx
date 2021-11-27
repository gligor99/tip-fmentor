import icon-dollar from '../assets/icon-dollar.svg'

const Tipper = () => {
  return (
    <section className="container">
      <div className="left-side">
          <div className="input-div">
              <img src={icon-dollar} alt="" />
          </div>
          <label className="tipper-title" htmlFor="bill">Bill</label>
          <input className="bill-input" type="number" name="bill" placeholder="$" />
      </div>
      <div className="right-side"></div>
    </section>
  );
};

export default Tipper;
