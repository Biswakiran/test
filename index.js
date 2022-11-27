const express = require("express")
const app = express();
const mongoose = require('mongoose');
const picRoute= require("./routes/pic");
const reqRoute = require('./routes/requests')
require('dotenv').config();
var cors = require('cors');





// app.use(function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:6000');
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//     );
//     next();
//   });
  app.use(express.json())
app.use(cors());

mongoose.connect(process.env.DB_URL)
.then(console.log("DB connected"))
.catch((err) => console.log(err));
//SOH-SigmaSquad

app.use(express.json());
app.use("/api/pic",picRoute);
app.use('/api/requests',reqRoute);

app.listen(6000, () => {
    console.log("Backend is running  6000");
});