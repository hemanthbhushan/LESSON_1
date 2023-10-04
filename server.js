const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.Port || 3500;

app.use(express.json())

//this is to get the constant files like css , when the file is loaded the
//css will be applied to the website 
app.use("/", express.static('/',path.join(__dirname, "public")));

// here we are using the routes for the middle ware
app.use("/", require("./routes/root"));

//here if the route doesnt exist it will be directed to this route
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});
app.listen(PORT, () => {
  console.log(`Server Running on the Port ${PORT}`);
});
