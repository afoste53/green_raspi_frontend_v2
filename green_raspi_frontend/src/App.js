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
    // const t0 = new Date("Feb 5, 2022 13:00:00").toTimeString().split("GMT")[0];
    // const t1 = new Date("Feb 5, 2022 13:10:00").toDateString().split("GMT")[0];
    // const t2 = new Date("Feb 5, 2022 13:20:00").toDateString().split("GMT")[0];
    // const t3 = new Date("Feb 5, 2022 13:30:00").toDateString().split("GMT")[0];
    // const t4 = new Date("Feb 5, 2022 13:40:00").toDateString().split("GMT")[0];
    // const t5 = new Date("Feb 5, 2022 13:50:00").toDateString().split("GMT")[0];
    // const t6 = new Date("Feb 5, 2022 14:00:00").toDateString().split("GMT")[0];
    // const t7 = new Date("Feb 5, 2022 13:10:00").toDateString().split("GMT")[0];
    // const t8 = new Date("Feb 5, 2022 13:20:00").toDateString().split("GMT")[0];
    // const t9 = new Date("Feb 5, 2022 13:30:00").toDateString().split("GMT")[0];

    // setVals({
    //   t_pressure: [
    //     { date: t0, val: 25.0 },
    //     { date: t1, val: 25.1 },
    //     { date: t2, val: 24.5 },
    //     { date: t3, val: 24.3 },
    //     { date: t4, val: 24.1 },
    //     { date: t5, val: 23.5 },
    //     { date: t6, val: 23.9 },
    //   ],
    //   t_humidity: [
    //     { date: t0, val: 25.0 },
    //     { date: t1, val: 25.1 },
    //     { date: t2, val: 24.5 },
    //     { date: t3, val: 24.3 },
    //     { date: t4, val: 24.1 },
    //     { date: t5, val: 23.5 },
    //     { date: t6, val: 23.9 },
    //   ],
    //   humidity: [
    //     { date: t0, val: 45.0 },
    //     { date: t1, val: 45.1 },
    //     { date: t2, val: 44.5 },
    //     { date: t3, val: 44.3 },
    //     { date: t4, val: 44.1 },
    //     { date: t5, val: 43.5 },
    //     { date: t6, val: 43.9 },
    //   ],
    //   ph: [
    //     { date: t0, val: 6.0 },
    //     { date: t1, val: 6.1 },
    //     { date: t2, val: 5.5 },
    //     { date: t3, val: 25.3 },
    //     { date: t4, val: 6.1 },
    //     { date: t5, val: 5.5 },
    //     { date: t6, val: 5.5 },
    //   ],
    // });
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
