import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from "../../assets/logo/logo.png";

const InvoiceGenerator = ({ invoiceData }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addImage(logo, "PNG", 150, 10, 50, 30);

    // Title
    doc.setFontSize(20);
    doc.text("Invoice", 14, 20);

    // Invoice Details
    doc.setFontSize(12);
    doc.text(`Invoice ID: ${invoiceData.invoiceId}`, 14, 30);
    doc.text(`Date: ${new Date(invoiceData.invoiceDate).toLocaleDateString()}`, 14, 40);
    doc.text(`Customer: ${invoiceData.customerName}`, 14, 50);

    // Table Data
    const tableColumn = ["Item", "Quantity", "Price", "Total"];
    const tableRows = invoiceData.items.map((item) => [
      item.name,
      item.quantity,
      item.price,
      item.quantity * item.price,
    ]);

    doc.autoTable({
      startY: 60,
      head: [tableColumn],
      body: tableRows,
    });

    // Total Amount
    doc.text(`Total: ₹${invoiceData.totalAmount}`, 14, doc.autoTable.previous.finalY + 10);

    // Save PDF
    doc.save(`Invoice_${invoiceData.invoiceId}.pdf`);
  };

  return (
    <button onClick={generatePDF} className="bg-blue-500 text-white py-2 px-4 rounded">
      Download Invoice
    </button>
  );
};

export default InvoiceGenerator;
