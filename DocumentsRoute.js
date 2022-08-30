const express = require('express');
const DocumentsRoute=express.Router();
const mysql = require('mysql')
const path=require("path")
const multer = require("multer");
//database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bba'
  })
  
  connection.connect()
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploadDoc/");
    },
    filename: (req, file, cb) => {
      const fileext = path.extname(file.originalname);
      console.log(fileext);
      const filename =
        file.originalname.replace(fileext, "").toLowerCase();
      cb(null, filename + fileext);
    },
  });
  const upload = multer({
    // limits: { fileSize: 2000000 },
    // fileFilter: (req, file, cb) => {
    //   if (file.fieldname == "img") {
    //     if (
    //       file.mimetype == "image/jpeg" ||
    //       file.mimetype == "image/png" ||
    //       file.mimetype == "image/jpg"
    //     ) {
    //       cb(null, true);
    //     } else {
    //       cb(new Error("only jpg,png,jpeg format are available"));
    //     }
    //   } else if (file.fieldname == "pdf") {
    //     if (file.mimetype == "application/pdf") {
    //       cb(null, true);
    //     } else {
    //       cb(new Error("only pdf are available"));
    //     }
    //   } else {
    //     cb(new Error("unknown error"));
    //   }
    // },
    storage: storage,
  });
  const uploadSingleImage = upload.array("documents")
  // post method
  // app.post('/process_post', upload.array("documents"), async function (req, res) {
  //   // Prepare output in JSON format 
  
  //   console.log(req.body);
  //   console.log(req.files);
  //   const query = `INSERT INTO DOCUMENTS(record_id, NAME) VALUES('${req.body.id}', '${req.body.name}')`
  //   connection.query(query, (err, rows, fields) => {
  //     if (err) throw err
  //     //  return rows
  //     else {
  //       console.log(req.files.length)
  //       req.files.map((row, index) => {
  //         console.log(row.filename);
  //         console.log(req.body.id);
  //         const query = `INSERT INTO  fileupload(fileName, record_id) VALUES('${row.filename}', '${req.body.id}')`
  //         connection.query(query);
  
  //       });
  //       res.status(200).json({
  
  //         "success": true,
  
  //       })
  
  //     }
  
  //     connection.end;
  
  
  //   });
  // })
  
  DocumentsRoute.post(
    "/process_post",
  
    async function (req, res, next) {
      
  
      uploadSingleImage(req, res, async function (err) {
        console.log(req.body)
        console.log(req.files)
        if (err) {
          console.log("hhh")
          return res.status(200).send({ status: 400, message: err.message });
        }
  
        const query = `INSERT INTO DOCUMENTS(record_id, NAME) VALUES('${req.body.id}', '${req.body.name}')`
        connection.query(query, (err, rows, fields) => {
          if (err) throw err
          //  return rows
          else {
            console.log(req.files)
            req.files.map((row, index) => {
              console.log(row.filename);
              console.log(req.body.id);
              const query = `INSERT INTO  fileupload(fileName, record_id, size) VALUES('${row.filename}', '${req.body.id}','${row.size}')`
              connection.query(query);
      
            });
            res.status(200).json({
      
              "success": true,
      
            })
      
          }
      
          connection.end;
      
      
        });
  
      });
    }
  );
  
  DocumentsRoute.get("/filedata/:id", async function (req, res) {
    const s = req.params.id;
  
    console.log("fileget");
    const query = `SELECT * FROM fileupload where record_id =${s} `;
  
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
  
          "success": true,
          "data": rows
        })
        console.log(rows);
      }
  
    })
  
    connection.end;
  })
  
  
  //get method
  DocumentsRoute.get("/docslist", async function (req, res) {
    console.log("ok");
    const query = "SELECT * from fileupload ";
  
  
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
  
          "success": true,
          "data": rows
        })
        // console.log(rows);
      }
  
    })
  
    connection.end;
  })
  
  
  
  //get method
  DocumentsRoute.get("/getdata", async function (req, res) {
    console.log("ok");
    const query = "SELECT* from documents ";
  
   await connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
  
          "success": true,
          "data": rows
        })
        // console.log(rows);
      }
  
    })
  
    connection.end;
  })
  
  //get method search
  DocumentsRoute.get("/search/:search", async function (req, res) {
    const s = req.params;
    console.log(s);
    const query = `SELECT*FROM documents where name like '%${s.search}%' or record_id like '%${s.search}%' `;
  
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
  
          "success": true,
          "data": rows
        })
        console.log(rows);
      }
  
    })
  
    connection.end;
  })
  
   
  
  
  DocumentsRoute.get("/searchd/:search", async function (req, res) {
    const s = req.params;
    console.log(s);
    const query = `SELECT * FROM fileupload where filename like '%${s.search}%'  `;
  
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
  
          "success": true,
          "data": rows
        })
        console.log(rows);
      }
  
    })
  
    connection.end;
  })
  
  
  //delete method
  DocumentsRoute.delete("/delete/:id", async function (req, res) {
    const id = req.params.id;
    const query = `delete from documents where id=${id}`;
  
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
          "success": true,
          "data": rows
        })
        console.log(rows);
      }
  
    })
  
    connection.end;
  })
  
  //update method
  DocumentsRoute.put("/update/:id", async function (req, res) {
    console.log(req.body);
    const id = req.params.id;
    const query = `update documents set email='${req.body.name}' where id=${id}`;
  
    connection.query(query, (err, rows, fields) => {
      if (err) throw err
      //  return rows
      else {
        res.status(200).json({
          "success": true,
          "data": rows
        })
        console.log(rows);
      }
  
    })
    connection.end;
  
  })





module.exports=DocumentsRoute;