import { Props } from "../App";
import iconDollar from "../assets/icon-dollar.svg";
import iconPeople from "../assets/icon-person.svg";

const Tipper: React.FC<Props> = ({
  bill,
  people,
  total,
  amount,
  customTip,
  handleBill,
  handlePeople,
  handleButton,
  handleCustomTip,
  handleReset,
}) => {
  return (
    <section className="container">
      <div className="left-side">
        <form>
          <label htmlFor="bill">Bill</label>
          <div className="input-div">
            <img className="input-icon" src={iconDollar} alt="dollarIcon" />
            <input
              type="number"
              placeholder="0"
              value={bill}
              onChange={handleBill}
            />
          </div>
          <label htmlFor="select-tip">Select Tip %</label>
          <div className="buttons">
            <button className="percentage-btn" value="5" onClick={handleButton}>
              5%
            </button>
            <button
              className="percentage-btn"
              value="10"
              onClick={handleButton}
            >
              10%
            </button>
            <button
              className="percentage-btn"
              value="15"
              onClick={handleButton}
            >
              15%
            </button>
            <button
              className="percentage-btn"
              value="20"
              onClick={handleButton}
            >
              25%
            </button>
            <button
              className="percentage-btn"
              value="25"
              onClick={handleButton}
            >
              50%
            </button>
            <input
              type="number"
              placeholder="Custom"
              value={customTip}
              className="custom-tip"
              onChange={handleCustomTip}
            />
          </div>
          <label htmlFor="no-of-people">Number of people</label>
          <div className="input-div">
            <img className="input-icon" src={iconPeople} alt="personIcon" />
            <input
              type="number"
              placeholder="0"
              value={people}
              onChange={handlePeople}
            />
          </div>
        </form>
      </div>
      <div className="right-side">
        <div className="results-tip">
          <div className="results-text">
            <p className="results-label">Tip Amount</p>
            <p className="per-person">/ person</p>
          </div>
          <div className="tip-result">
            <h1 id="tip-result">${amount.toFixed(2)}</h1>
          </div>
        </div>
        <div className="results-total">
          <div className="results-text">
            <p className="results-label">Total</p>
            <p className="per-person">/ person</p>
          </div>
          <div className="total-result">
            <h1 id="total-result">${total.toFixed(2)}</h1>
          </div>
        </div>
        <button className="reset-btn" type="reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </section>
  );
};

export default Tipper;
