// const express = require("express"); const app = express(); 


// const db= require('./../models');
// db.sequelize.sync().then(()=>{
//     app.listen(3005, () => {  console.log("Server running on port 3001"); 
//     });
// })



const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/users'); // Adjust the path as necessary
const bookingRoutes = require('./routes/booking');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use the user routes
app.use('/api', userRoutes);
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
