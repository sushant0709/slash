import React, { useState } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import getResults from "../util";
import { useNavigate } from "react-router-dom";

/**
 * Takes in input from user about the product they would like to see the prices for and routes the request to Results page
 * @returns
 */
function Menu() {
  const navigate = useNavigate();

  const fetchResults = async () => {
    let result = null;
    try {
      result = await getResults(searchWeb, searchItem);
      navigate("/results", { state: { response: result } });
    } catch (error) {
      console.log(error);
    } finally {
      setButton("Fetched");
    }

    //props.getResult(response);
  };

  const handleSubmission = () => {
    setButton("Fetching");
    fetchResults();
  };

  const [button, setButton] = useState("Default");
  const [searchItem, setSearchItem] = useState(undefined);
  const [searchWeb, setSearchWeb] = useState(undefined);

  
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
              fullWidth
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              onChange={(e) => setSearchItem(e.target.value)} 
              style={{
                width: '1000px', // Adjust the width as needed
                fontSize: '20px', // Adjust the font size as needed
                color: 'blue', // Change the font color
              }}/>
            <FormControl fullWidth>
              <InputLabel variant="outlined" htmlFor="outlined-basic1">
                Website Name
              </InputLabel>
              <Select
                id="outlined-basic1"
                label="Website Name"
                variant="outlined"
                onChange={(e) => setSearchWeb(e.target.value)}
              >
                <MenuItem value="az">Amazon</MenuItem>
                <MenuItem value="wm">Walmart</MenuItem>
                <MenuItem value="eb">Ebay</MenuItem>
                <MenuItem value="cc">Costco</MenuItem>
                <MenuItem value="tg">Target</MenuItem>
                <MenuItem value="bb">BestBuy</MenuItem>
                <MenuItem value="thd">The Home Depot</MenuItem>
                <MenuItem value="all">All</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Button size="medium" variant="contained" color="secondary" onClick={handleSubmission} style={{
          backgroundColor: '#4285C4',
          width: '300px', // Replace with your desired color
          color: 'white', // Text color
          fontSize: '16px', // Font size
          marginTop: '30px', // Adjust the top margin to move the button to the next line
          }}>
          Search Item
            </Button></>
        ) : button === "Fetching" ? (
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Menu;
