const {Router} = require('express');
const router = Router();
router.post('/code', [], async(req, res) => {
    try{
        const {code} = req.body
        if(code == "tokenval"){
            res.status(200).json({message: "Код успешно принят", resultCode: 0});
        }
        else {
            res.status(401).json({message: "Код не верный"});
        }
    }
    catch(e) {
        res.status(500).json({message: "Что-то пошло не так"})
    }
    }

)
module.exports = router;