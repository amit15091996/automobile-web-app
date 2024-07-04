import { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import jsPDF from "jspdf";

const Form21 = () => {
  const [formData, setFormData] = useState({
    date: "",
    certifiedThat: "",
    vehicleName: "",
    invoiceNo: "",
    buyerName: "",
    relationship: "",
    buyerAddress: "",
    classOfVehicle: "",
    makerName: "",
    chassisNumber: "",
    engineNumber: "",
    horsePower: "",
    fuelUsed: "",
    cylinders: "",
    manufacturingDate: "",
    seatCapacity: "",
    unladenWeight: "",
    bodyColor: "",
    bodyType: "",
    manufacturedLocation: "",
    grossVehicleWeight: "",
    acFitted: "",
    dealer: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Initialize jsPDF
    const pdf = new jsPDF({ unit: "px", format: "a4" });

    // Set font size and style for the document
    pdf.setFontSize(12);
    pdf.setFont("times", "normal");

    // Define the content based on form data
    const content = `
      FORM 21 
      (See Rule 47 (a) & (d)) 
      SALE CERTIFICATE
      AUTHORESED DEALER IN BAJAJ AUTO LTD
      Shubham Auto
      (To be issued by manufacturer / dealer of offer of defence department (in case of auctioned) 
      vehicles) for presentation along with application for registration of a motor vehicle
                                                                                        ${formData.date}       
      Certified that ................. ${formData.vehicleName}.....................
      has been delivered by us to 
      Bearing invoice No....................${formData.invoiceNo} ...................
      Name of the buyer .................${formData.buyerName}..................... 
      Son/Wife/Daughter of .................${formData.relationship}.......................
      Address: ${formData.buyerAddress}
      The vehicle is under agreement of hire/purchase/lease Hypothecation with
      ${formData.dealer}
  
      The Details of the vehicle are as below:

      1. Class of vehicle:                                            :.....${formData.classOfVehicle}.....
      2. Maker's Name:                                                :.....${formData.makerName}.....
      3. Chassis Number:                                              :.....${formData.chassisNumber}.....
      4. Engine Number:                                               :.....${formData.engineNumber}.....
      5. Horse Power / Cubic Capacity:                                :.....${formData.horsePower}.....
      6. Fuel used:                                                   :.....${formData.fuelUsed}.....
      7. No of Cylinders:                                             :.....${formData.cylinders}.....
      8. Month & year of Mfg.:                                        :.....${formData.manufacturingDate}.....
      9. Seat capacity (Including Driver):                            :.....${formData.seatCapacity}.....
      10. Unladen weight:                                             :.....${formData.unladenWeight}.....
      11. Colour/s Body:                                              :.....${formData.bodyColor}.....
      12. Type of Body:                                               :.....${formData.bodyType}.....
      13. Model Manufactured Location:                                :.....${formData.manufacturedLocation}.....
      14. Gross vehicle weight (in kgs):                              :.....${formData.grossVehicleWeight}.....
      15. Ac Fitted:                                                  :.....${formData.acFitted}.....
      16. Dealer:                                                     :.....${formData.dealer}.....
  



      Trade Certificate:                                                   For SHUBHAM AUTO Authorised Store
      CG23/T/16/GBD/2017          
                                                                            Authorized Signature                                  
    `;
// ${formData.tradeCertificate}
    // Add the content to the PDF
    pdf.text(content, 40, 40);

    // Example: You can save the PDF or show it to the user
    pdf.save("form21.pdf");

    // Reset form after submission (optional)
    setFormData({
      date: "",
      certifiedThat: "",
      vehicleName: "",
      invoiceNo: "",
      buyerName: "",
      relationship: "",
      buyerAddress: "",
      classOfVehicle: "",
      makerName: "",
      chassisNumber: "",
      engineNumber: "",
      horsePower: "",
      fuelUsed: "",
      cylinders: "",
      manufacturingDate: "",
      seatCapacity: "",
      unladenWeight: "",
      bodyColor: "",
      bodyType: "",
      manufacturedLocation: "",
      grossVehicleWeight: "",
      acFitted: "",
      dealer: "",
    });
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
        Form 21 Sale Certificate
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} id="formContent">
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Date"
              size="small"
              name="date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={formData.date}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Certified That"
              size="small"
              name="certifiedThat"
              value={formData.certifiedThat}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Vehicle Name"
              size="small"
              name="vehicleName"
              value={formData.vehicleName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Invoice No"
              size="small"
              name="invoiceNo"
              value={formData.invoiceNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Name of the Buyer"
              size="small"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Son / Wife / Daughter"
              size="small"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Address"
              size="small"
              name="buyerAddress"
              value={formData.buyerAddress}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Class of Vehicle"
              size="small"
              name="classOfVehicle"
              value={formData.classOfVehicle}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Maker's Name"
              size="small"
              name="makerName"
              value={formData.makerName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Chassis Number"
              size="small"
              name="chassisNumber"
              value={formData.chassisNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Engine Number"
              size="small"
              name="engineNumber"
              value={formData.engineNumber}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Horse Power / Cubic Capacity"
              size="small"
              name="horsePower"
              value={formData.horsePower}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Fuel Used"
              size="small"
              name="fuelUsed"
              value={formData.fuelUsed}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="No of Cylinders"
              size="small"
              name="cylinders"
              value={formData.cylinders}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Month & Year of Mfg."
              size="small"
              name="manufacturingDate"
              value={formData.manufacturingDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Seat Capacity (Including Driver)"
              size="small"
              name="seatCapacity"
              value={formData.seatCapacity}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Unladen Weight"
              size="small"
              name="unladenWeight"
              value={formData.unladenWeight}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Colour/s Body"
              size="small"
              name="bodyColor"
              value={formData.bodyColor}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Type of Body"
              size="small"
              name="bodyType"
              value={formData.bodyType}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Model Manufactured Location"
              size="small"
              name="manufacturedLocation"
              value={formData.manufacturedLocation}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Gross vehicle weight (in kgs)"
              size="small"
              name="grossVehicleWeight"
              value={formData.grossVehicleWeight}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Ac Fitted"
              size="small"
              name="acFitted"
              value={formData.acFitted}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="Dealer"
              size="small"
              name="dealer"
              value={formData.dealer}
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

export default Form21;
