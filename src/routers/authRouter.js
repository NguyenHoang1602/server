const Router = require("express")

const authRouter = Router();

authRouter.post('/register', (req, res) => {
    console.log(req.body);
    res.send("Register Succesfully!");
})
authRouter.post('/login', (req, res) => {
    console.log(req.body);
    res.send("Login Succesfully!");
})


module.exports = authRouter;