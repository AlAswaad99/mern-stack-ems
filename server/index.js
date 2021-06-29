const express = require("express");
const mongoose = require("mongoose");
const EmployeeRoute = require("./routes/employee");

const port = process.env.PORT || 5000;
const app = express();

mongoose.connect(process.env.MONGODB_URI || 
    "mongodb+srv://SYSADMIN:sysadmin1234@as-challenge-trial.w9eqp.mongodb.net/AS_ChallengeTrial?retryWrites=true&w=majority",
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
app.use(express.json());
app.use("/employee", EmployeeRoute);


app.listen(port, ()=> console.log(`listening on port ${port}`));

