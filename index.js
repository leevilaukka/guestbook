// express init
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

// route imports 
app.use("/", require("./routes/home"));
app.use("/guestbook", require("./routes/guestbook"));
app.use("/ajaxmessage", require("./routes/ajaxmessage"));
app.use("/newmessage", require("./routes/newmessage"));


app.listen(port, () => {
    console.log(`Guestbook app listening on port ${port}`)
})