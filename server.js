let express = require('express');
const port = 3000;

let app = express();

app.get('/', function(req,res){
    res.send('Hello World!!!!');
});

app.listen(port, function(){
    console.log('listening on port '+port);
});
