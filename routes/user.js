const express = require('express');
const router = express.Router();

router.post('/switch', (req, res) => {
    let switchNo = req.body.switchNo;
    let state = req.body.switchState;
    const data = `switch no ${switchNo} is now ${state}`;
    console.log(data);
    res.send(data);
});

module.exports = router;