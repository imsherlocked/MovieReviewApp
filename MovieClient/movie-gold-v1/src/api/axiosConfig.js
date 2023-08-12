import axios from "axios";

export default axios.create({
  //2TrfdEq1Eq5uqsZU2R3p2CwwSpq_4xkTZnx3Am28TddUNiBvw- NGROK AUTH TOKEN
  baseURL: "https://7e9e-67-21-186-132.ngrok.io/", //"https://9c96-103-106-239-104.ap.ngrok.io",

  headers: { "ngrok-skip-browser-warning": "true" },
});
