import React, { Component } from "react";
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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Copyright from "./Tiny_Components/Copyright";
import Dropdown from "./Tiny_Components/Dropdown";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

class SellPage extends Component {
  state = {
    element: "",
    date: "",
  };

  handleUnitChange = (event) => {
    this.setState({ element: event.target.value });
  };

  handleDateChange = (newDate) => {
    this.setState({ date: newDate });
  };

  render() {
    const units = ["Pack", "Count"];
    const { element, date } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
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
              // onSubmit={handleSubmit}
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
                    onElementChange={this.handleElementChange}
                    value={element}
                    elements={units}
                    label="Units *"
                  />
                </Grid>
                <Grid item xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Expiry Date *"
                      inputFormat="MM-YYYY"
                      views={["month", "year"]}
                      value={date}
                      onChange={() => this.handleDateChange}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
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
      </ThemeProvider>
    );
  }
}

export default SellPage;
