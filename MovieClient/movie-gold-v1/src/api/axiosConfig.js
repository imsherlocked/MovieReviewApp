import axios from "axios";

export default axios.create({
  baseURL: "https://f840-67-21-186-132.ngrok.io", //"https://9c96-103-106-239-104.ap.ngrok.io",

  headers: { "ngrok-skip-browser-warning": "true" },
});
