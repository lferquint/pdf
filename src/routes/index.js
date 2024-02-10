import { Router } from "express";
import { buildPDF } from "../libs/pdfkit.js";
import doProducts from "../methods/doProducts.js";
import transformDataForm from "../methods/transformDataForm.js";


const router = Router();

router.post("/invoice", (req, res) => {
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=invoice.pdf",
  });
  let dataForm = req.body;
  console.log(dataForm)
  dataForm.listProducts = transformDataForm(dataForm);
  dataForm.date = new Date();
  let subtotal = 0;
  for(let i = 0; i<dataForm.listProducts.length; i++){
    subtotal = subtotal + dataForm.listProducts[i].subtotal;
  }
  dataForm.subtotal = subtotal.toFixed(2);

  let iva = (subtotal * 16) / 100;
  dataForm.iva = iva.toFixed(2);

  let total = subtotal + iva;
  dataForm.total = total.toFixed(2);
  

  console.log(dataForm)

  buildPDF(
    (data) => stream.write(data),
    () => stream.end(),
    dataForm
  );
});

export default router;
