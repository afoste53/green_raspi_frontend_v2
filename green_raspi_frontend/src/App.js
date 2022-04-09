/** @format */

import Homescreen from "./Homescreen.js";
import "./App.css";
import { useState, useEffect } from "react";
import useInterval from "./useInterval";
import axios from "axios";
import { destination } from "./secrets/secrets.js";
import Loading from "./Loading";

function App() {
  const [vals, setVals] = useState({
    t_pressure: [],
    t_humidity: [],
    humidity: [],
    ph: [],
    loading: true,
    error: null
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
        loading: false,
        error: null,
      });
      console.log(res);
    } catch (err) {
      handleError(err);
    }
  };

  const handleError = (error) => {
    console.error(error);
    setVals({ ...vals, error, loading: false });
  };

  useEffect(() => {
    async function fetchData() {
      fetchVals();
    }
    fetchData();
  }, []);

  useInterval(fetchVals, 60000);

  if (vals.error) return <h1>{vals.error}</h1>;

  if (vals.loading) return <Loading />;

  return <Homescreen id="homescreen" vals={vals} />;
}

export default App;
