import { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";

const Form22 = () => {
  const [formData, setFormData] = useState({
    engineNumber: "",
    chassisNumber: "",
    modelNumber: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., store data or generate PDF)
    console.log("Form submitted:", formData);
    // Add logic to store data or generate PDF here
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        maxWidth: "800px",
        margin: "auto",
        marginTop: "20px",
      }}
    >
      <Typography variant="h5" gutterBottom>
        Form 22 Sale Certificate
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Engine Number"
              fullWidth
              name="engineNumber"
              value={formData.engineNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Chassis Number"
              fullWidth
              name="chassisNumber"
              value={formData.chassisNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Model Number"
              fullWidth
              name="modelNumber"
              value={formData.modelNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date"
              fullWidth
              name="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Generate PDF
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form22;
