const express  = require("express");
const path = require("path");

const app = express();
const port = 3000;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('./public'));

const pageRouter = express.Router();

pageRouter.get('/', (req, res)=>{
    res.render('book');
})



app.use('/', pageRouter);

app.listen(port, ()=>{
    console.log("Server started!!! Port 3000")
})