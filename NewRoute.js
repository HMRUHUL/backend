const express = require('express');
const New_Route=express.Router();
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
    
  //get method
  New_Route.get("/getdata", async function (req, res) {
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

  New_Route.get("/filedata/:id", async function (req, res) {
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



  //get method search
  New_Route.get("/search/:search", async function (req, res) {
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




  New_Route.delete("/delete/:name", async function (req, res) {
    
    const id = req.params.name;
    console.log(id);
    const query = `delete from documents where name=${id}`;
  
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



  New_Route.get("/searchd/:search/:name", async function (req, res) {
    const s = req.params;
    console.log(s);
    const query = `SELECT fileupload.*,documents.name from fileupload join documents on fileupload.record_id=documents.record_id where fileupload.filename like '%${s.search}%' and documents.name='${s.name}' `;
  
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


  New_Route.delete("/delete/:filename", async function (req, res) {
    const id = req.params.filename;
    const query = `delete from fileupload where filename='${id}'`;
  
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




  module.exports=New_Route;