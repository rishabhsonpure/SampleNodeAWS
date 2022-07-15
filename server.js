var exp = require ('express');
var app = exp();

app.use(exp.static('public'));

app.get('/',function(req,res){

    res.sendFile(__dirname+"/public/q8_thumb_img")
});

app.listen(9000,function(){
    console.log("ready at 9000");
});