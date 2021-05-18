const {Router} = require('express');
const config = require('config');
const router = Router();
const tokens = config.get("tokens");
router.post('/code', [], async(req, res) => {
    try{
        const {code} = req.body
        if(tokens.includes(code)){
            res.status(200).json({message: "Token was authorizated", resultCode: 0});
        }
        else {
            res.status(401).json({message: "This token doesn't exist"});
        }
    }
    catch(e) {
        res.status(500).json({message: "Server error"})
    }
    }

)
module.exports = router;