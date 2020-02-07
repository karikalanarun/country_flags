import Axios from "axios";

Axios.get("https://restcountries.eu/rest/v2/all").then(data =>
  console.log(data)
);
