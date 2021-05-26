import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    console.log(response.data);
    alert(
      `The temperature in ${props.ciy} is currently ${Math.round(
        response.data.main.temp
      )}°C`
    );
  }

  let apiKey = `f530d75c7e8984e88ff649a70bb0bf68`;
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weather">
      <h2>Hello from Weather!</h2>
      <h2>Hello from Weather!</h2>
      <h2>Will upload on GitHub</h2>
    </div>
  );
}
