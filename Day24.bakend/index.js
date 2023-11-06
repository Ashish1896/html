const express=reqire("express");
const app =express();
// console.log(app);
let port =8080;//3000(used to custoum server)
app.listen(port,()=>{
    console.log("app is listening on port ");
});
app.use((req,res)=>{
    console.log("request,recived");
    let code =("<h1>fruits</h1> <ul><li>apple</li><li>orange</li></ul>");
   res.send(code);
    //     name:"apple",
    //     color:"red",
    // });
});