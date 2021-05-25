const Router = require('express')
const router = new Router()
const userController = require('./../controllers/userController')

router.post('/create', userController.create)
router.get('/getAll', userController.getAll)
router.get('/:id', userController.getOne)

module.exports = router
