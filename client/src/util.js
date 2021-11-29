import axios from "axios";

let config = {
  headers: {
    Connection: "keep-alive"
  }
};

export default async function getResults(site, item) {
  //https://slash-app-staging.azurewebsites.net/all/dell
  let url = "http://127.0.0.1:8000/" + site + "/" + item;
  let response = await axios.get(url);
  // const results = await JSON.stringify(response);
  // while (response.data == 404) {
  //     response = await axios.get(url);
  // }
  console.log("Results are " + JSON.stringify(response.data));
  return JSON.stringify(response.data);
}
