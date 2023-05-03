import { useState, useEffect } from "react";

function HomeViewModel() {
  const [date, setDate] = useState("");
  const [festivos, setFestivos] = useState([]);

  useEffect(() => {
    const now = new Date();
    setDate(now.toLocaleDateString());
  }, []);

  useEffect(() => {
    const getFestivos = async () => {
      const response = await fetch(
        "https://date.nager.at/api/v3/PublicHolidays/2023/ES"
      )
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
  }, []);

  return {
    date,
    festivos,
  };
}

export default HomeViewModel;
