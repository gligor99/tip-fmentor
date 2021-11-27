import { Props } from "../App";
import iconDollar from "../assets/icon-dollar.svg";
import iconPeople from "../assets/icon-person.svg";

const Tipper: React.FC<Props> = ({bill, people, total, handleChange}) => {
  return (
    
      <section className="container">
        <div className="left-side">
          <form>
            <label htmlFor="bill">Bill</label>
            <div className="input-div">
              <img className="input-icon" src={iconDollar} alt="dollarIcon" />
              <input type="number" placeholder="0" value={bill} onChange={(e) => handleChange(e)}/>
            </div>
            <label htmlFor="select-tip">Select Tip %</label>
            <div className="buttons">
              <button className="percentage-btn" data-value="5">
                5%
              </button>
              <button className="percentage-btn" data-value="5">
                10%
              </button>
              <button className="percentage-btn" data-value="5">
                15%
              </button>
              <button className="percentage-btn" data-value="5">
                25%
              </button>
              <button className="percentage-btn" data-value="5">
                50%
              </button>
              <input
                type="number"
                placeholder="Custom"
                className="custom-tip"
              />
            </div>
            <label htmlFor="no-of-people">Number of people</label>
            <div className="input-div">
              <img className="input-icon" src={iconPeople} alt="personIcon" />
              <input type="number" placeholder="0" value={people}/>
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
              <h1 id="tip-result">$0.00</h1>
            </div>
          </div>
          <div className="results-total">
            <div className="results-text">
              <p className="results-label">Total</p>
              <p className="per-person">/ person</p>
            </div>
            <div className="total-result">
              <h1 id="total-result">${total}</h1>
            </div>
          </div>
          <button className="reset-btn" type="reset" >
            RESET
          </button>
        </div>
      </section>
    
  );
};

export default Tipper;
