import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ObjectiveModel from "../models/ObjectiveModel";
import calcularFechaFinal from "./calcularFechaFinal";

function useShowObjectiveViewModel() {
  const [model, setModel] = useState(new ObjectiveModel());
  const params = useParams();
  const [final, setFinal] = useState(new Date());

  let path = window.location.pathname;
  path = path.slice(0, path.lastIndexOf("/"));

  const showViewModel = new ObjectiveModel(model);

  useEffect(() => {
    if (path === "/show-objective" && params.id) {
    }
  }, [params.id, path]);

  //calcular fecha final
  useEffect(() => {
    const fechaFinal = calcularFechaFinal(model);
    setFinal(fechaFinal);
  }, [model]);

  useEffect(() => {
    console.log("final" + final);
  }, [final]);

  return {
    model,
    showViewModel,
    final,
  };
}

export { useShowObjectiveViewModel };
