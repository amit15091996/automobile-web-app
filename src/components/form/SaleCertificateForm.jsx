import React, { useState } from "react";
import { Grid } from "@mui/material";
import Form21 from "./Form21";
import Form22 from "./Form22";

const SaleCertificateForm = () => {
  const [formData, setFormData] = useState({
    buyerName: "",
    buyerAddress: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    engineNumber: "",
    chassisNumber: "",
    modelNumber: "",
    date: "",
  });

  const handleForm21Submit = (data) => {
    setFormData({
      ...formData,
      engineNumber: data.engineNumber,
      chassisNumber: data.chassisNumber,
      modelNumber: data.modelNumber,
      date: data.date,
    });
  };

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Form21 formData={formData} onFormSubmit={handleForm21Submit} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Form22 formData={formData} />
      </Grid>
    </Grid>
  );
};

export default SaleCertificateForm;
