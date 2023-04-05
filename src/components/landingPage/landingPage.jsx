import React, { useState } from "react";
import "./landingPage.css";
import Header from "../header/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("kg");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Weight: ${weight} ${unit}`);
    // let convertedWeight = weight;
    // if(unit ==="lb"){
    //   convertedWeight = (weight*0.453592).toFixed(2);
    // }
    axios
      .post("http://localhost:8081/postData", { weight, unit })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      navigate("/showData");
  };

  return (
    <>
      <Header />
      <section className="main_section">
        <form onSubmit={handleSubmit}>
          <main className="main_field">
            <label htmlFor="weight">Weight:</label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
            <select
              id="unit"
              name="unit"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="kg">kg</option>
              <option value="lb">lb</option>
            </select>
          </main>
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default LandingPage;
