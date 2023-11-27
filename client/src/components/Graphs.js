import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend);

/**
 * Generates graphs to better display the results of the products
 * @returns
 */
function Graphs() {
  const handleSubmission = () => {
    setButton("Fetching");
    const fetchVariety = async () => {
      const res = await fetch("http://localhost:8000/analysis/varietyCount/all/" + searchItem);
      const data = await res.json();
      setPieData({
        labels: data.map((variety) => variety.website),
        datasets: [
          {
            label: "Variety of collections available",
            data: data.map((variety) => variety.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      });
      setButton("Fetched");
    };
    const fetchCosts = async () => {
      const res = await fetch("http://localhost:8000/analysis/topCost/all/" + searchItem);
      const data = await res.json();
      setLineData({
        labels: data.map((costs) => costs.website),
        datasets: [
          {
            label: "Lowest price on each website",
            data: data.map((costs) => costs.lowest_price),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ]
          },
          {
            label: "Highest price on each website",
            data: data.map((costs) => costs.highest_price),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ]
          }
        ]
      });
      setButton("Fetched");
    };
    fetchVariety();
    fetchCosts();
  };

  const [pieData, setPieData] = useState(undefined);
  const [lineData, setLineData] = useState(undefined);
  const [button, setButton] = useState("Default");
  const [searchItem, setSearchItem] = useState(undefined);
  //const imagePath = "./bgimage.jpg";
  return (
    <div style={{ height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', // Replace with the actual path to your image
    }}>
      <img src="data:image/jpeg;base64,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" 
      style={{ width: '600px', height: '300px' }}/>
      <div style={{ backgroundImage: 'url("./bgimage.jpg")', // Replace with the actual path to your image
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      height: '50vh', // Adjust the height as needed
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",}}>
        {button === "Default" ? (
          <><Stack direction="row" alignItems="center" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Search Item"
              variant="outlined"
              style={{
                width: '500px', // Adjust the width as needed
                fontSize: '20px', // Adjust the font size as needed
                color: 'blue', // Change the font color
              }}
              onChange={(e) => setSearchItem(e.target.value)} 
              />
          </Stack><Button size="medium" variant="contained" color="secondary" onClick={handleSubmission} style={{
            backgroundColor: '#4285C4',
            width: '300px',
            color: 'white',
            fontSize: '16px',
            marginTop: '30px', // Adjust the top margin to move the button to the next line
          }}>
              Chart Results
            </Button></>
        ) : button === "Fetching" ? (
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <></>
        )}
      </div>
      {pieData != undefined ? (
        <div style={{ display: "flex", width: "60vw", height: "80vh", marginBottom: "15vh", marginTop: "5vh" }}>
          <h2 style={{ margin: "auto", marginLeft: "3vw", marginRight: "3vw", marginBottom: "2vh" }}>
            {" "}
            Variety of {searchItem} available across websites{" "}
          </h2>
          <Pie
            data={pieData}
            options={{
              title: {
                display: true,
                text: "Variety of collections available",
                fontSize: 20
              },
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {lineData != undefined ? (
        <div style={{ display: "flex", width: "60vw", height: "80vh", marginBottom: "15vh", marginTop: "5vh" }}>
          <h2 style={{ margin: "auto", marginLeft: "3vw", marginRight: "3vw", marginBottom: "2vh" }}>
            {" "}
            Highest and lowest prices of {searchItem} on each website{" "}
          </h2>
          <Line
            data={lineData}
            options={{
              title: {
                display: true,
                text: "Highest and lowest prices on each website",
                fontSize: 20
              },
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Graphs;
