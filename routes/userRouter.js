// import controllers directory, users
const userController = require('../controllers/userController.js')
const directoryController = require('../controllers/directoryController')


// router
const router = require('express').Router()


// use routers
router.post('/addUser', userController.addUser)

router.get('/getAllUsers', userController.getAllUsers)

router.get('/published', userController.getPublishedUser)


//router.get('/getSearchUsers', userController.getSearchUsers)



// Directory and Controller

router.get('/allDirectories', directoryController.getAllDirectories)
router.post('/addDirectory/:id', directoryController.addDirectory)

// get User Directory
router.get('/getUserDirectories/:id', userController.getUserDirectories)




// users router
router.get('/:id', userController.getOneUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

module.exports = router