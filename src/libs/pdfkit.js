import PDFDocument from "pdfkit";

export function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();

  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(14).font('Courier-Bold').fillColor('gray').text("Division", 260, 45,  {
    paragraphGap: 5,
    width: 110,
    align: 'right'
  });
  doc.fontSize(14).font('Courier-Bold').fillColor('gray').text("Hospitalaria", {
    paragraphGap: 5,
    width: 110,
    align: 'right'
  });


  doc.rect(380, 20, 0.5, 80)
  .strokeColor('gray')
  .stroke();

  doc.rect(70, 110, 470, 0.5)
  .strokeColor('gray')
  .stroke();
  
  doc.image('./img/image.jpeg' , 390, 20 ,{
    // fit: [100, 100],
    width: 150,
    height: 80
  });  

  doc.fontSize(12).moveDown().text("Cotización pisos conductivos", {
    paragraphGap: 15,
    align: 'right'
  });

  doc.fontSize(12).text("Cotización pisos conductivos", {
    paragraphGap: 15
  });
  doc.end();
}
