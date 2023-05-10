const { createData,getData } = require("../controller/controller");


const router = require("express").Router();

router.post('/create',createData)
router.get('/view',getData)



module.exports = router;