const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.port || 2000;
const app = express();
app.use(bodyParser.json());

const employeeRoutes = require("./routes/employee");
const employeeSchema = require("./models/employee");
app.use(bodyparser.urlencoded({
  extended: true
}));
app.use("/", employeeRoutes);
app.use(express.json());
  // Note: __dirname is directory current directory you're in. Try logging it and see what you get!

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/' }));
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(port, () => {
  console.log("server running ");
});
mongoose.connect(
  "mongodb://ajitgupta9211:ajitgupta9211@cluster0-shard-00-00-yjvmd.mongodb.net:27017,cluster0-shard-00-01-yjvmd.mongodb.net:27017,cluster0-shard-00-02-yjvmd.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("data connected successfully");
    } else {
      console.log(
        "mongoose not connected  " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);
