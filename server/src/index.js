const exress=require("express");

const app=exress();
const port=process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

