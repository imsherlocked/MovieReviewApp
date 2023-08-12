import axios from "axios";

export default axios.create({
  //2TrfdEq1Eq5uqsZU2R3p2CwwSpq_4xkTZnx3Am28TddUNiBvw- NGROK AUTH TOKEN
  baseURL: "http://localhost:8080",

  headers: { "ngrok-skip-browser-warning": "true" },
});
