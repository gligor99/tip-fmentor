import iconDollar from '../assets/icon-dollar.svg'

const Tipper = () => {
  return (
    <section className="container">
      <div className="left-side">
          <form>
            <label htmlFor="bill">Bill</label>
            <div className="input-div">
                <img src={iconDollar} alt="dollarIcon" />
                <input type="text" placeholder="0" />
            </div>
          </form>
      </div>
      <div className="right-side"></div>
    </section>
  );
};

export default Tipper;
