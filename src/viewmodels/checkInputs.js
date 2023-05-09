export default function checkInputs(model) {
  if (!model.name || model.name.trim().length === 0) {
    alert("Debe introducir un nombre.");
    return;
  } else if (model.totalHoras <= 0) {
    alert("El campo 'Total de horas' debe ser mayor que cero.");
    return;
  } else if (!model.fechaInicio) {
    alert("El campo 'Fecha de inicio' es obligatorio.");
    return;
  } else if (
    (model.lunes !== undefined &&
      model.lunes !== null &&
      model.lunes !== "" &&
      model.lunes < 0) ||
    (model.martes !== undefined &&
      model.martes !== null &&
      model.martes !== "" &&
      model.martes < 0) ||
    (model.miercoles !== undefined &&
      model.miercoles !== null &&
      model.miercoles !== "" &&
      model.miercoles < 0) ||
    (model.jueves !== undefined &&
      model.jueves !== null &&
      model.jueves !== "" &&
      model.jueves < 0) ||
    (model.viernes !== undefined &&
      model.viernes !== null &&
      model.viernes !== "" &&
      model.viernes < 0) ||
    (model.sabado !== undefined &&
      model.sabado !== null &&
      model.sabado !== "" &&
      model.sabado < 0) ||
    (model.domingo !== undefined &&
      model.domingo !== null &&
      model.domingo !== "" &&
      model.domingo < 0) ||
    (model.lunes < 1 &&
      model.martes < 1 &&
      model.miercoles < 1 &&
      model.jueves < 1 &&
      model.viernes < 1 &&
      model.sabado < 1 &&
      model.domingo < 1)
  ) {
    alert(
      "Al menos uno de los campos de los días debe tener un valor mayor o igual a uno y no pueden estar vacíos o nulos."
    );
    return;
  }
}
