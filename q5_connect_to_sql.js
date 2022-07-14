var exp = require('express');
var mysql = require('mysql2');
var app = exp();
var con = mysql.createConnection({
	
	host : 'localhost',
	user : 'root',
	password : 'rishabh3030',
	database : 'knowitdb',
	
});

con.connect(function(err){
	
	if(!err)
		console.log("connected");
	else
		console.log("failed");
});

app.get('/emp',function(req,res){
	con.query("select empno,ename,job,sal from emp",function(err,data){
		if(!err)
		{
			res.write("<table border=1>");
			data.forEach(function(v){
			res.write("<tr>");
			res.write("<td>"+v.empno+"</td>");
			res.write("<td>"+v.ename+"</td>");
			res.write("<td>"+v.job+"</td>");
			res.write("<td>"+v.sal+"</td>");
			res.write("</tr>");	
		});
		res.write("</table>");
		res.end();
		}
		
	});
	
});

app.listen(9000,function(){
	console.log("ready at 9000");
});