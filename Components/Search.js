const express = require('express');
const Search_Route=express.Router();
const mysql = require('mysql')
const path=require("path")
const multer = require("multer");
const DBQuery=require('../Query_Builder')
//database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'bba'
//   })
  
//   connection.connect()


  

  //get method search
  // Search_Route.get("/search/:search", async function (req, res) {
  //   const s = req.params;
  //   console.log(s);
  //   const query = `SELECT*FROM documents where name like '%${s.search}%' or record_id like '%${s.search}%' `;
  
  //   connection.query(query, (err, rows, fields) => {
  //     if (err) throw err
  //     //  return rows
  //     else {
  //       res.status(200).json({
  
  //         "success": true,
  //         "data": rows
  //       })
  //       console.log(rows);
  //     }
  
  //   })
  
  //   connection.end;
  // })

  Search_Route.get("/search/:search", async function (req, res) {
    const s = req.params;
    console.log(s);
    const query = `SELECT*FROM documents where lower(name) like '%${s.search}%' or document_id like '%${s.search}%' `;
  const result=await DBQuery(query)
    
        res.status(200).json({
  
          "success": true,
          "data": result
        })
  
   

  })

  

  Search_Route.get("/searchd/:search/:name", async function (req, res) {
    const s = req.params;
    console.log(s);
    const query = `SELECT fileupload.*,documents.name from fileupload join documents on fileupload.documents_id=documents.id where fileupload.filename like '%${s.search}%' and documents.name='${s.name}' `;
  
    const result=await DBQuery(query)
    
    res.status(200).json({

      "success": true,
      "data": result
    })

  })



  Search_Route.get("/searchd/:search", async function (req, res) {
    const s = req.params;
    console.log(s);
    const query = `SELECT*FROM fileupload where lower(filename) like '%${s.search}%'  `;
    const result=await DBQuery(query)
    
    res.status(200).json({

      "success": true,
      "data": result
    })
  })

  module.exports=Search_Route;