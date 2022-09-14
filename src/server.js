
const path = require('path')
const express = require('express')
const { engine } = require('express-handlebars')
const app = express();
const port = 8080

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())


 //Template engine
app.engine('hbs', engine({
    extname: '.hbs', // đổi tên file từ .handlebars sang hbs
    helpers: {
  
      sum: (a,b) => a+b // thêm hàm sum
  
    }  
  }));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,"resourse/views")) // nối đường link

 // khởi tạo tuyến đường 
const route = require('./routes')

const db = require("./config/connectDB")

route(app)

db.connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })