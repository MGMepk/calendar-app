import "../css/NewObjective.css";
import React from "react";
import Inputs from "./Inputs";
import { useNewObjectiveViewModel } from "../viewmodels/NewObjectiveViewModel";

function NewObjective() {
  const {
    onAddBtnClick,
    inputList,
    handleChange,
    handleSubmit,
    onRemoveBtnClick,
  } = useNewObjectiveViewModel();
  const lt = [
    "Introduce tu nombre",
    "Introduce una descripción",
    "Introduce el total de horas",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
    "Fecha de inicio",
  ];

  return (
    <div className="form">
      <h2>New Objective</h2>

      <form>
        <fieldset>
          <Inputs
            type="text"
            name={"name"}
            label={lt[0]}
            onChange={handleChange}
          />
          <Inputs
            type="text"
            name={"description"}
            label={lt[1]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"totalHoras"}
            label={lt[2]}
            onChange={handleChange}
          />
          <label>¿Cuántas horas por dia quieres dedicar?</label>
          <Inputs
            type="number"
            name={"lunes"}
            label={lt[3]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"martes"}
            label={lt[4]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"miercoles"}
            label={lt[5]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"jueves"}
            label={lt[6]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"viernes"}
            label={lt[7]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"sabado"}
            label={lt[8]}
            onChange={handleChange}
          />
          <Inputs
            type="number"
            name={"domingo"}
            label={lt[9]}
            onChange={handleChange}
          />
          <Inputs
            type="date"
            name={"fechaInicio"}
            label={lt[10]}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <label>
            ¿Ha habido alguna incidencia o piensas tomar algún día libre?
          </label>
          <br />
          <button type="button" onClick={onAddBtnClick}>
            Añadir dia libre
          </button>
          <button type="button" onClick={onRemoveBtnClick}>
            Borrar ultimo
          </button>
          {inputList}
        </fieldset>
        <button type="button" onClick={handleSubmit}>
          Guardar
        </button>
      </form>
    </div>
  );
}
export default NewObjective;
