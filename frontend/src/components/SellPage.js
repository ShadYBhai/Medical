import React, { Component, useState } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { DatePicker, LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Copyright from "./Tiny_Components/Copyright";
import Dropdown from "./Tiny_Components/Dropdown";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { createSellOrder } from "../actions/sellOrderActions";
import { useNavigate } from "react-router-dom";

// const theme = createTheme();
function SellPage() {
  const [element, setElement] = useState();
  const [date, setDate] = useState(new Date());
  const units = ["Pack", "Count"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUnitChange = (event) => {
    setElement(event.target.value);
  };

  const handleElementChange = (event) => {
    setElement(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    const formDataObj = Object.fromEntries(formData.entries());
    formDataObj['expiry'] = date.$d;
    formDataObj['unit'] = element;
    dispatch(createSellOrder(formDataObj, navigate));

  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    // <ThemeProvider theme={theme}>
    <>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sell
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-medicine-name"
                  name="medicineName"
                  required
                  fullWidth
                  id="medicineName"
                  label="Medicine Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="quantity"
                  label="Quantity"
                  name="quantity"
                  autoComplete="quantity-entered"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Dropdown
                  onElementChange={handleElementChange}
                  value={element}
                  elements={units}
                  label="Units *"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label="Expiry date"
                    inputFormat="DD/MM/YYYY"
                    value={date}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sell
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Back to Products
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>

    // </ThemeProvider>
  );
}


export default SellPage;
// class SellPage extends Component {
//   state = {
//     element: "",
//     date: "",
//   };

//   handleUnitChange = (event) => {
//     this.setState({ element: event.target.value });
//   };

//   handleDateChange = (newDate) => {
//     this.setState({ date: newDate });
//   };

//   render() {

//   }
// // const Sell = styled.div`
// //   background-color: #363636;
// // `;

// export default SellPage;
