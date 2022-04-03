/** @format */

import Homescreen from "./Homescreen.js";
import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./useInterval";
import axios from "axios";
import { destination } from "./secrets/secrets.js";

function App() {
  const [vals, setVals] = useState({
    t_pressure: [],
    t_humidity: [],
    humidity: [],
    ph: [],
    loading: true,
  });

  const fetchVals = async () => {
    // api call to pi for values and then set
    // initial values to be passed down

    // uncomment to make call to server

    try {
      let res = await axios.get(destination);

      setVals({
        t_pressure: res.data.t_pressure,
        t_humidity: res.data.t_humidity,
        humidity: res.data.humidity,
        ph: 5.5,
      });
      console.log(res);
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
