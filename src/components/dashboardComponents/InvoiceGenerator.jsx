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
    doc.text(`Customer: ${invoiceData.content.user.name}`, 14, 50);
    doc.text(`Email: ${invoiceData.user.email}`, 14, 60);
    doc.text(`Phone: ${invoiceData.user.phoneNumber}`, 14, 70);

    // Table Data
    const tableColumn = ["Item", "Quantity", "Price", "Total"];
    const tableRows = invoiceData.content.map((item) => [
      item.product,
      1, // Assuming quantity is 1 for each product
      item.payment.paymentAmount,
      item.payment.paymentMethod,
      item.payment.validity,
    ]);

    doc.autoTable({
      startY: 80,
      head: [tableColumn],
      body: tableRows,
    });

    // Total Amount
    doc.text(`Total: ₹${invoiceData.invoiceAmount}`, 14, doc.autoTable.previous.finalY + 10);

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