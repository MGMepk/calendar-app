import CardLite from "./CardLite";
function Objectives({ models, fechasFinales}) {

  return (
    <div className="cards-container">
      {models.map((model, index) => (
        <div key={model.id}>
        <CardLite model={model} fechaFinal={fechasFinales[index]} />
        </div>
      ))}
    </div>
  );
}

export default Objectives;