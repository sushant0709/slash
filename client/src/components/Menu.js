import React, { useState } from "react";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField } from "@mui/material";
import getResults from "../util";

function Menu() {
  const fetchResults = async () => {
    let result = null;
    try {
      result = await getResults("all", searchItem);
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

  return (
    <div>
      <div style={{ display: "flex", marginLeft: "1vw", marginTop: "2vh" }}>
        {button === "Default" ? (
          <Stack direction="row" alignItems="center" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Item Name"
              variant="outlined"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmission}>
              Search Item
            </Button>
          </Stack>
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
