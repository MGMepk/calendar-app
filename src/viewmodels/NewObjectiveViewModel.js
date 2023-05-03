import { useState, useEffect } from "react";

function HomeViewModel() {
  const [time, setTime] = useState("");

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return {
    time,
    handleTimeChange,
  };
}

export default HomeViewModel;
