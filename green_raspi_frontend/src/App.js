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
  });

  const fetchVals = async () => {
    // api call to pi for values and then set
    // initial values to be passed down

    // uncomment to make call to server

    // try {
    //   let res = await axios.get(destination);
    //   setVals({
    //     t_pressure: res.data.t_pressure,
    //     t_humidity: res.data.t_humidity,
    //     humidity: res.data.humidity,
    //     ph: 5.5,
    //   });
    // } catch (err) {
    //   console.error(err);
    // }
    let t0 = new Date("Feb 5, 2022 13:00:00");
    let t1 = new Date("Feb 5, 2022 13:10:00");
    let t2 = new Date("Feb 5, 2022 13:20:00");
    let t3 = new Date("Feb 5, 2022 13:30:00");
    let t4 = new Date("Feb 5, 2022 13:40:00");
    let t5 = new Date("Feb 5, 2022 13:50:00");
    let t6 = new Date("Feb 5, 2022 14:00:00");
    let t7 = new Date("Feb 5, 2022 13:10:00");
    let t8 = new Date("Feb 5, 2022 13:20:00");
    let t9 = new Date("Feb 5, 2022 13:30:00");

    let t_p = [
      { t0: 25.0 },
      { t1: 25.5 },
      { t2: 25.3 },
      { t3: 24.7 },
      { t4: 24.3 },
      { t5: 25.0 },
      { t6: 25.0 },
      { t7: 23.9 },
      { t8: 24.7 },
      { t9: 25.0 },
    ];

    setVals({
      t_pressure: [
        { t0: 25.0 },
        { t1: 25.5 },
        { t2: 25.3 },
        { t3: 24.7 },
        { t4: 24.3 },
        { t5: 25.0 },
        { t6: 25.0 },
        { t7: 23.9 },
        { t8: 24.7 },
        { t9: 25.0 },
      ],
      t_humidity: [
        { t0: 25.0 },
        { t1: 25.5 },
        { t2: 25.3 },
        { t3: 24.7 },
        { t4: 24.3 },
        { t5: 25.0 },
        { t6: 25.0 },
        { t7: 23.9 },
        { t8: 24.7 },
        { t9: 25.0 },
      ],
      humidity: [
        { t0: 45.0 },
        { t1: 45.5 },
        { t2: 45.3 },
        { t3: 44.7 },
        { t4: 44.3 },
        { t5: 45.0 },
        { t6: 45.0 },
        { t7: 43.9 },
        { t8: 44.7 },
        { t9: 45.0 },
      ],
      ph: [
        { t0: 5.5 },
        { t1: 5.4 },
        { t2: 5.7 },
        { t3: 5.5 },
        { t4: 5.5 },
        { t5: 5.5 },
        { t6: 5.5 },
        { t7: 5.5 },
        { t8: 5.5 },
        { t9: 5.5 },
      ],
    });
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
