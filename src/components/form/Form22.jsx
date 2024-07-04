import { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import jsPDF from "jspdf";

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
    generatePDF();
  };

  const generatePDF = () => {
    // Initialize jsPDF instance
    const pdf = new jsPDF();

    // Set font size and style
    pdf.setFontSize(12);
    pdf.setFont("times", "normal");

    // Define content for the PDF
    const content = `
      FORM 22

      Engine Number: ${formData.engineNumber}
      Chassis Number: ${formData.chassisNumber}
      Model Number: ${formData.modelNumber}
      Date: ${formData.date}
    `;

    // Add content to the PDF
    pdf.text(content, 20, 20);

    // Save the PDF (optional step)
    // pdf.save("form22.pdf");

    // Open print dialog
    pdf.autoPrint();
    pdf.output("dataurlnewwindow");

    // Reset form after submission (optional)
    setFormData({
      engineNumber: "",
      chassisNumber: "",
      modelNumber: "",
      date: "",
    });
  };

  const handlePrint = () => {
    generatePDF(); // Generate PDF again to open print dialog
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handlePrint}
              style={{ marginLeft: 10 }}
            >
              Print
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Form22;
