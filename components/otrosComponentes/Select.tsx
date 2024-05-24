import React from "react";

export const Select = (): React.ReactElement => {
  return (
    <>
      <select name="selecciona" id="selecciona" className="miSelect">
        <option value="inicio">--Selecciona una opción</option>
        <option value="esto">esto</option>
        <option value="loOtro">loOtro</option>
        <option value="loOtroOtro">loOtroOtro</option>
      </select>
    </>
  );
};
