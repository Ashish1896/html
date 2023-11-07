const http = require('http');
const fs = request('fs');
 const server= http.createServer((req,res)=>{ 
console.log(req.url, req.method);

res.setHeader('content-type','text/html');
let path='./Day24.bakend/24th.html'



fs.readFile('./Day24.bakend/24th.html' ,(err,data) => {
	if(err){
		console.log(err);
		res.end();
	}else{
		// res.write();
		res.end(data);
		}
	
});
 });
// res.write('<head><link rel="stylsheet" href="#"></head>')
// res.write('<p>hallo,ninjas</p>')
// res.write('<p>hallo,ninjas</p>')
// res.end();
 
app.listen(3000,"localhost", () => {
	console.log('listening for requests on port 3000');
});
// app.use((req,res)=>{
// 	console.log("request recived");
// 	res.send("this is a basic response");
// })

app.ge("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let htmlStr='<h1>welcome to the page of @{username}{ashishsahoo.7}<h1>'
    res.send(htmlStr);
});
app.get ("search",(req,res)=>{
    let {q}= req.query;
    res.send(" sherch results quory ");
});