const express = require("express");
const mysql = require("mysql2");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");
const port = 5000;
var path = require('path');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database101",
  });

//
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// CREATE(insert)
app.post("/tolongges", (req, res) => {
    const { datetime,image } = req.body;
  
    connection.query(
      "INSERT INTO detection (datetime,image) VALUES (?,?)",
      [datetime,image],
      (err, results) => {
        try {
          if (results.affectedRows > 0) {
            res.json({ message: "Data has been added!" });
          } else {
            res.json({ message: "Something went wrong." });
          }
        } catch (err) {
          res.json({ message: err });
        }
      }
    );
  });



// READ (select)
app.get("/shows", (req, res) => {
  connection.query("SELECT * FROM detection ORDER BY datetime ASC", (err, results) => {
    try {
      if (results.length > 0) {
        let all = [];
        for (let i = 0; i < results.length; i++){
            all.push({
                image: new Buffer.from(results[i].image).toString('utf-8'),
                datetime: results[i].datetime
          })
        }
        res.json(all)

      }
    } catch (err) {
      res.json({ message: err });
    }
  });
});

app.get("/show", (req, res) => {
    connection.query("SELECT * FROM detection", (err, results) => {
      try {
        if (results.length > 0) {
          let base64 = [];
          for (let i = 0; i < results.length; i++){
            base64.push({
                  image: new Buffer.from(results[i].image).toString('utf-8'),
            })
          }
          res.json(base64)
  
        }
      } catch (err) {
        res.json({ message: err });
      }
    });
  });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

