const http =require("http");
const server =http.createServer((req,res)=>{
    console.log(req.url,req.method);

    res.setHeader("content-type","text/plain");
    res.write("hallo,world");
});
server.listen(3000,"localhost",()=>{
    console.log("listening for requests on port 3000");
});
// app.use((req,res)=>{
//     console.log(req);
//     console.log("request recived");
// });