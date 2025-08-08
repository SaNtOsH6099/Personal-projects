import React from "react";
import "./generateFile.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const GenerateFile = () => {
  const downloadPdf = () => {
    const listElement = document.querySelector(".list");
    if (!listElement) return;

    const filename = window.prompt(
      "Enter a file name for your PDF:",
      "todo-list"
    );

    if (!filename) return;

    html2canvas(listElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${filename}.pdf`);
    });
  };

  return (
    <div className="btn-container">
      <button className="download" onClick={downloadPdf}>
        Download PDF
      </button>
    </div>
  );
};

export default GenerateFile;
