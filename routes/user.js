const express = require('express')
    // const router = express.Router()
    // @ts-ignore
const router = require('express-promise-router')()

const UserController = require('../controllers/user')

router.route('/')
    .get(UserController.index)
    .post(UserController.newUser)
    // .patch()
    // .put()
    // .delete()
    // router.route('/:userID/:deckID')
    //     .get(UserControllers.getUser)

module.exports = router