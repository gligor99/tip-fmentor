import iconDollar from "../assets/icon-dollar.svg";
import iconPeople from '../assets/icon-person.svg'

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
          <label htmlFor="select-tip">Select Tip %</label>
          <div className="buttons">
            <button>5%</button>
            <button>10%</button>
            <button>15%</button>
            <button>25%</button>
            <button>50%</button>
            <input type="number" placeholder="Custom" />
          </div>
          <label htmlFor="no-of-people">Number of people</label>
          <div className="input-div">
              <img src="" alt="" />
          </div>
        </form>
      </div>
      <div className="right-side"></div>
    </section>
  );
};

export default Tipper;
