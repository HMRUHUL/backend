const express = require('express');
const Search_Route=express.Router();
const mysql = require('mysql')
const path=require("path")
const multer = require("multer");
const DBQuery=require("../Database/Query_Builder")


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