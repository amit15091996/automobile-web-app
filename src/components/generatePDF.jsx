// Inside SaleCertificateForm.js after form definition

import jsPDF from 'jspdf';
import htmlToPdfmake from 'html-to-pdfmake';
import { Button } from '@mui/material';

const generatePDF = () => {
  const pdf = new jsPDF();

  const html = document.querySelector('#saleCertificate').innerHTML;
  const pdfMake = htmlToPdfmake(html);

  pdfMake['footer'] = (currentPage, pageCount) => {
    return { text: `${currentPage} of ${pageCount}`, alignment: 'center' };
  };

  pdf.html(html, {
    callback: (pdf) => {
      pdf.save('Form21SaleCertificate.pdf');
    }
  });
};

// Amend handleSubmit function
const handleSubmit = (e) => {
  e.preventDefault();
  generatePDF();
};

// Add an onClick event to the Generate PDF Button
<Button type="button" variant="contained" color="primary" onClick={generatePDF}>
  Generate PDF
</Button>
