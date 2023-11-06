const http=reqire("http");
const app =http();
// console.log(app);
let port =8080;//3000(used to custoum server)
app.listen(port,()=>{
    console.log("app is listening on port ");
});
app.use((req,res)=>{
    console.log("request,recived");
});