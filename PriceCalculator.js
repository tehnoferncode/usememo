import React, { useState, useMemo } from "react";
import "./PriceCalculator.css";

function PriceCalculator() {
  const [price, setPrice] = useState(1000);
  const [count, setCount] = useState(0);

  // 🔥 Expensive calculation (simulated)
  const discountedPrice = useMemo(() => {
    console.log("Calculating discount...");
    let total = price;

    // simulate heavy calculation
    for (let i = 0; i < 100000000; i++) {}

    return total - total * 0.2; // 20% discount
  }, [price]); // 👈 only recalculate when price changes

  return (
    <div className="price-card">
      <h2 className="title">🛒 Product Price Calculator</h2>

      <p className="label">
        Original Price: <b>₹{price}</b>
      </p>

      <p className="discount">
        Discounted Price (20% OFF): <b>₹{discountedPrice}</b>
      </p>

      <div className="btn-row">
        <button onClick={() => setPrice(price + 500)}>
          Increase Price
        </button>

        <button onClick={() => setCount(count + 1)}>
          Counter: {count}
        </button>
      </div>

      <p className="note">
        Counter button does NOT recalculate discount because of useMemo.
      </p>
    </div>
  );
}

export default PriceCalculator;
