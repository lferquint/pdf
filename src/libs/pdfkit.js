import PDFDocument from "pdfkit-table";
import doDate from '../methods/doDate.js';
import doProducts from "../methods/doProducts.js";
import db from '../db/db.js';

export async function buildPDF(dataCallback, endCallback, dataOriginal) {
  
  //constantes indispensables
  const topPosition = 40;
  const data = dataOriginal;

  //init documents and add events
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  //render design
  doc.fontSize(13).font('Courier-Bold').fillColor('gray').text("Division", 260, 45,  {
    paragraphGap: 5,
    width: 110,
    align: 'right'
  });
  doc.text("Hospitalaria", {
    paragraphGap: 5,
    width: 110,
    align: 'right'
  });
  doc.rect(380, topPosition, 0.5, 80)
  .strokeColor('gray')
  .stroke();

  doc.rect(70, topPosition + 90, 470, 0.5)
  .strokeColor('gray')
  .stroke();
  
  doc.image('./img/image.jpeg' , 390, topPosition ,{
    // fit: [100, 100],
    width: 150,
    height: 80
  });
  doc.fontSize(6).fillColor('black').text(
    "San Francisco No. 9, Col. San Jerónimo Aculco, D.F.",  
    70,
    topPosition + 60,
    {
      paragraphGap: 10
    }
  );
  doc.fontSize(6).text(
    `Tels. (55) 5631-2039 / Email: vrintecsistemasdesalud@yahoo.com.mx`,  
    70,
    topPosition + 70,
    {
      paragraphGap: 10
    }
  );
  doc.fontSize(11).moveDown().moveDown().font('Helvetica-Bold').text(
    `${data.brand}`,  
    {
    }
  );
  doc.text(
    `ATN. ${data.name}`, 
    {
    }
  );
  doc.text(
    `TEL. ${data.telephone}`, 
    {
    }
  );
  doc.font('Helvetica').text(
    doDate(data.date), 
    {
      align: 'right'
    }
  );
  doc.moveDown().moveDown().text(
    `Por medio de la presente ponemos a su atentea consideracion la cotizacion de ${data.productos}.`, 
    {
    }
  );
  doc.moveDown().text(
    `Obra: ${data.obra}`
  );
  doc.image('./img/image.jpeg',{
    // fit: [100, 150],
    width: 150,
  }); 

  let granArray =[];
  for(let i = 0; i<data.listProducts.length; i++){
    let array =[];
    array.push(data.listProducts[i].producto, data.listProducts[i].descripcion, data.listProducts[i].precio)
    granArray.push(array);
  }
  let table = {
    // title: "Title",
    // subtitle: "Subtitle",
    headers: [ "Producto", "Descripcion", "Precio" ],
    rows: granArray,
  };

  await doc.table(table, { 
    width: 475,
  })

  doc.text(`SUBTOTAL $ ${data.subtotal}`, {
    align: 'right'
  });
  doc.text(`IVA $ ${data.iva}`, {
    align: 'right'
  });
  doc.text(`TOTAL $ ${data.total}`, {
    align: 'right'
  });

  doc.end();
}
