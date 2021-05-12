const {Router} = require('express');
const router = Router();
router.post('/code', [], async(req, res) => {
    try{
        const {code} = req.body
        if(code == "tokenval"){
            res.status(200).json({message: "Token was authorizated", resultCode: 0});
        }
        if(code.length < 3) {
            res.status(400).json({message: "Minimal length of token: 3"})
        }
        else {
            res.status(401).json({message: "This token don't exist"});
        }
    }
    catch(e) {
        res.status(500).json({message: "Server error"})
    }
    }

)
module.exports = router;