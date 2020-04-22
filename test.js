const  express = require("express"); 
const router = express.Router(); 

router.get("/name",(req,res)=>{
    console.log("welcome to test route");
    res.status(200).json({
        message:"welcome to test route"
    });
});

router.post("/login",
(req,res,next)=>{
    const{email, password}=req.body;
    console.log(password);
    if(!password || !email){
        return res.status(400).json({
            message:"Please fill all fields"
        });
    }
    next();
},
(req,res,next)=>{
    const { email, password } = req.body;
    return res.status(200).json({
        email,
        password,
    });
}
);
module.exports = router