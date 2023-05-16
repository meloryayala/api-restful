const router = require('express').Router()

router.get('/clients', (req, res) => {
    res.send({
        ok: '123'
    })
})

module.exports = router