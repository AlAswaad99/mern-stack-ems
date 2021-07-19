const express = require("express");
const mongoose = require("mongoose");
const EmployeeRoute = require("./routes/employee");
const path = require("path");
const cors = require("cors");
const dotenv = require('dotenv');


dotenv.config();
const port = process.env.PORT;
const app = express();

try{
  mongoose.connect(process.env.MONGODB_URI,
    // "mongodb://localhost:27017/AS_ChallengeTrial", 
      {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
  
    const connection = mongoose.connection;
  
    connection.once("open",()=>{
        console.log("mongodb has connectec huzzah");
    });
}
catch (e){
  console.log(e);
}

app.use(express.json());
app.use(cors());
// app.use(expressValidator());
app.use("/employee", EmployeeRoute);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static("client/build"));

  // app.get("*", (req, res) =>{
  //   res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  // })
}
// app.use(express.static("client/build"));

//   app.get("*", (req, res) =>{
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })

app.listen(port, ()=> console.log(`listening on port ${port}`));

