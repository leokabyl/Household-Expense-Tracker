const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
// MongoDB connection setup
const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
// Connect to the MongoDB server
async function connect() {
 try {
 await client.connect();
 console.log('Connected to MongoDB server');
 } catch (err) {
 console.error('Error connecting to MongoDB server', err);
 process.exit(1);
 } }
 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins for development
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.get("/register", async function (req, res) {
    try {
      res.setHeader("content-type", "application/json");
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins for development
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      var doc = {
        username: req.query.name,
        email:req.query.email,
        age:req.query.age,
        gender: req.query.gender,
        phone: req.query.phone,
        password: req.query.password,
        confirm_password: req.query.confirm_password
      };
      const db = client.db('expense');
      const collection=db.collection('user');
      const result = await collection.insertOne(doc);
      //var result = await users.insertOne(doc);
      data = { status: true, message: "Inserted Successfully" };
      res.json(data);
      console.log("Inserted Successfully");
    } catch (err) {
      console.error("Error ", err);
      data = { status: false, message: "Insert Failed" };
      res.json(data);
    }
  });
  app.get('/userlogin', async function (req, res){
    try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
      var doc = {
        email:req.query.email,
        password: req.query.password,
      };
      const db = client.db('expense');
      const collection=db.collection('user');
      const result = await collection.findOne(doc);
      if(result!=null)
      {
          data={ status:true,message: "Successfully find the docs",list:result };
      }
      else
      {
        data={ status:false,message: "Invalid Login or Password"};
      }
      res.json(data);
    } 
    catch (err) {
      console.error('Error', err);
      data={ status:false,message: "Failed find the docs"};
      res.json(data);
    }
   });
   app.get('/delete', async function (req, res){
    try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
      var doc = {
        email:req.query.email,
        password:req.query.password
      };
        const db = client.db('expense');
      const collection=db.collection('user');
      const result = await collection.deleteOne(doc);
      if(result.deletedCount>0)
      {
          data={ status:true,message: "Successfully Deleted",list:result };
          console.log("deleted successfully");
      }
      else
      {
        data={ status:false,message: "Failed to delete"};
        console.log("deleted failed");
      }
      res.json(data);
    } 
    catch (err) {
      console.error('Error', err);
      data={ status:false,message: "Failed find the docs"};
      res.json(data);
    }
   });


   
   app.get("/main", async function (req, res) {
    try {
      res.setHeader("content-type", "application/json");
      res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins for development
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      var doc = {
        email:req.query.user,
        category: req.query.category,
        amount:req.query.amount,
        date:req.query.date,
      };
      const db = client.db('expense');
      const collection=db.collection('mydata');
      const result = await collection.insertOne(doc);
      //var result = await users.insertOne(doc);
      data = { status: true, message: "Inserted Successfully" };
      res.json(data);
      console.log("Inserted Successfully");
    } catch (err) {
      console.error("Error ", err);
      data = { status: false, message: "Insert Failed" };
      res.json(data);
    }
  });

  app.get('/del', async function (req, res){
    try {
      res.setHeader('content-type','application/json')
      res.setHeader("Access-Control-Allow-Origin","*");
      var doc = {
        category: req.query.category,
        amount:req.query.amount,
        date:req.query.date,
      };
      const db = client.db('expense');
      const collection=db.collection('mydata');
      const result = await collection.deleteOne(doc);
      if(result.deletedCount>0)
      {
          data={ status:true,message: "Successfully Deleted",list:result };
          console.log("deleted successfully");
      }
      else
      {
        data={ status:false,message: "Failed to delete"};
        console.log("deleted failed");
      }
      res.json(data);
    } 
    catch (err) {
      console.error('Error', err);
      data={ status:false,message: "Failed find the docs"};
      res.json(data);
    }
   });

   app.get('/findone', async function (req, res){
    try {
    res.setHeader('content-type','application/json')
    res.setHeader("Access-Control-Allow-Origin","*");
    const db = client.db('expense');
    const collection=db.collection('mydata');	
    const result = await collection.find({ email: req.query.user }).toArray();
    var tot=0;
    for(var i=0;i<result.length;i++)
    {
      tot=tot+parseInt(result[i].amount);
    }
    data={ status:true,message: "Successfully find the docs",list:result,total:tot };
    res.json(data);
    } catch (err) {
        console.error('Error', err);
        data={ status:false,message: "Failed find the docs"};
    res.json(data);
    }
  });
  

// Start the server */
app.listen(5000, () => {
 console.log('Server running at http://localhost:5000');
connect(); // Connect to MongoDB when the server starts
});