import React, { useState } from "react";

function CalendarioViewModels() {
  const [festivos, setFestivos] = useState([]);

  const getFestivos = async () => {
    fetch("https://date.nager.at/api/v3/PublicHolidays/2023/ES")
      .then((response) => response.json())
      .then((data) => {
        const holidays = data.filter(
          (holiday) =>
            holiday.counties == null || holiday.counties.includes("ES-CT")
        );
        setFestivos(holidays);
      });
  };

  getFestivos();
}

export default CalendarioViewModels;
