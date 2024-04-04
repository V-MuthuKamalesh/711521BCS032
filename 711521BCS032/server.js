const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const port = 5000;
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMjE3ODIxLCJpYXQiOjE3MTIyMTc1MjEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjAzZjllYmFjLTE1YzItNDczYS1iMGQ3LTBlNTc4NGYwYTM4YSIsInN1YiI6ImtpdC4yNS4yMWJjczAzMkBnbWFpbC5jb20ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjAzZjllYmFjLTE1YzItNDczYS1iMGQ3LTBlNTc4NGYwYTM4YSIsImNsaWVudFNlY3JldCI6InV0eE9MS1VkcUN0cG5odUEiLCJvd25lck5hbWUiOiJNdXRodUthbWFsZXNoIiwib3duZXJFbWFpbCI6ImtpdC4yNS4yMWJjczAzMkBnbWFpbC5jb20iLCJyb2xsTm8iOiI3MTE1MjFiY3MwMzIifQ.3_Xa1DR3Q5W-0yT6IlHGxch1NApSMV4rdARTz_WqdAU";

app.get("/route", (req, res) => {
  axios
    .get("http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=1000", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      const data = response.data;
      res.json(data);
    });
});

app.listen(port, () => {
  console.log(`Port No: ${port}`);
});
