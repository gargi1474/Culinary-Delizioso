const express = require("express");
const Pizza=require('./models/pizzaModel');
<<<<<<< HEAD
const path=require('path');
=======
>>>>>>> 6dba03dd910bc4c6f781ae4d1c87ff4fa84da250

const db=require("./db")
const app = express();

app.use(express.json());
const pizzasRoute=require('./routes/pizzaRoute');
const userRoute=require("./routes/userRoute");
const ordersRoute=require("./routes/ordersRoute");

app.use('/api/pizzas/',pizzasRoute);
app.use("/api/users",userRoute);
app.use("/api/orders",ordersRoute);

<<<<<<< HEAD


if(process.env.NODE_ENV==='production'){
app.use(express.static(path.join(__dirname,'/client/build')))
app.get('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})

}else{
  app.get("/", (req, res) => {
    res.send("Server working 🔥");
  });
}

=======
app.get("/", (req, res) => {
  res.send("Server working 🔥");
});


>>>>>>> 6dba03dd910bc4c6f781ae4d1c87ff4fa84da250
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port port 🔥`);