/** @format */

import Homescreen from "./Homescreen.js";
import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./useInterval";

function App() {
  const [vals, setVals] = useState({
    t_pressure: 0,
    t_humidity: 0,
    humidity: 0,
    ph: 0,
  });

  const get_init_vals = () => {
    // api call to pi for values and then set
    // initial values to be passed down
    let t_pressure = 70;
    let t_humidity = 70;
    let humidity = 50;
    let ph = 7;

    setVals({
      t_pressure,
      t_humidity,
      humidity,
      ph,
    });
  };

  const get_updated_vals = async () => {
    // dummy code - api call
    let t_pressure = vals.t_pressure + 10;
    let t_humidity = vals.t_humidity + 10;
    let humidity = vals.humidity + 10;
    let ph = vals.ph + 10;
    return {
      t_pressure,
      t_humidity,
      humidity,
      ph,
    };
  };

  useEffect(() => {
    get_init_vals();
  }, []);

  const fetchVals = async () => {
    // api call
    try {
      let res = await get_updated_vals();

      // set vals to new vals
      setVals({
        t_pressure: res.t_pressure,
        t_humidity: res.t_humidity,
        humidity: res.humidity,
        ph: res.ph,
      });
    } catch (err) {
      console.error(err);
      return;
    }
  };

  useInterval(fetchVals, 60000);

  return <Homescreen id="homescreen" vals={vals} />;
}

export default App;
