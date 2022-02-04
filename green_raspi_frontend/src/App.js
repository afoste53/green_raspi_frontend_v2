/** @format */

import Homescreen from "./Homescreen.js";
import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./useInterval";
import axios from "axios";

function App() {
  const [vals, setVals] = useState({
    t_pressure: 0,
    t_humidity: 0,
    humidity: 0,
    ph: 0,
  });

  const fetchVals = async () => {
    // api call to pi for values and then set
    // initial values to be passed down
    try {
      let res = await axios.get("http://192.168.1.20:5000/");
      setVals({
        t_pressure: res.data.t_pressure,
        t_humidity: res.data.t_humidity,
        humidity: res.data.humidity,
        ph: 5.5,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    async function fetchData() {
      fetchVals();
    }
    fetchData();
  }, []);

  useInterval(fetchVals, 60000);

  return <Homescreen id="homescreen" vals={vals} />;
}

export default App;
