import { useState, useEffect } from "react";
import ObjectiveModel from "../models/ObjectiveModel";
import calcularFechaFinal from "./calcularFechaFinal";

function useHomeViewModel() {
  const [date, setDate] = useState("");

  const [models, setModels] = useState([]);
  const [model, setModel] = useState(new ObjectiveModel());
  const homeViewModel = new ObjectiveModel(model);
  const [festivos, setFestivos] = useState([]);
  const [fechasFinales, setFechasFinales] = useState([]);

  // useEffect to get a current date
  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString());
  }, [date]);

  // get data festivos from API using axios
  useEffect(() => {
    const getFestivos = async () => {
      fetch('https://date.nager.at/api/v3/PublicHolidays/2023/ES')
      .then(response => response.json())
      .then(data => {
        const barcelonaHolidays = data.filter(holiday => holiday.counties != null || holiday.counties.includes('ES-CT'));
        setFestivos(JSON.stringify(barcelonaHolidays));
        localStorage.setItem("festivos", JSON.stringify(barcelonaHolidays));
        console.log(barcelonaHolidays);
      });
    };
    getFestivos();
  }, []);

  //iterar calcularFechaFinal() para cada objetivo

  useEffect(() => {
    const fechasFinales = models.map((model) => {
      return calcularFechaFinal(model);
    });
    setFechasFinales(fechasFinales);
  }, [models]);

  useEffect(() => {
    console.log("finales" + JSON.stringify(fechasFinales));
  }, [fechasFinales]);

  return {
    date,
    models,
    festivos,
    homeViewModel,
    fechasFinales,
  };
}

export { useHomeViewModel };
