const Tipper = () => {
  return (
    <section className="container">
      <div className="left-side">
          <label htmlFor="bill">Bill</label>
          <input type="number" name="bill" placeholder="$" />
      </div>
      <div className="right-side"></div>
    </section>
  );
};

export default Tipper;
