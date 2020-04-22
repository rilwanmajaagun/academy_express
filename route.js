const  express = require("express"); 
const router = express.Router();                   // we are getting router and this router allow us to have flexible route, we can have alot of route 

router.get("/name", (req, res)=>{
    // console.log("got here");
    res.status(200).json({
        message:"Success"
    });
});

router.post(
    "/login",
    (req, res, next) => {
        const { email, password } = req.body;     
        console.log(password);
        if (!password || !email) {
            return res.status(400).json({
                message: "Please fill all fields",
            });
        }
        next();                            // the next is a way of lining up middlewares, wen on middleware validation is done it goes to the next one.
    },
    (req, res, next) => {
        const { email, password } = req.body;
        return res.status(200).json({
            email,
            password,
        });
    }
);
 module.exports = router;