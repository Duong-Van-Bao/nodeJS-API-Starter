/**
 * we can interact with mongoose in three diffirent ways:
 * [v]Callback
 * [v]Promises
 * [x]Async/await (Promises)
 */
const User = require('../models/User')

// const getUser = async(req, res, next) => {
//     console.log('req params', req.params);
//     const { userID } = req.params
//     const user = await User.findById(userID)
//     console.log('user info', user)
// }

// const index = (req, res, next) => {
//Callback way
// User.find({}, (err, users) => {
//     if (err) next(err)
//     return res.status(200).json({ users })
// })

// @ts-ignore
// return res.status(200).json({
//     message: 'You requested to user handle.'
// })
// }

// const index = (req, res, next) => {
//     //Promises way  
//     User.find().then(users => {
//         return res.status(200).json({ users })
//     }).catch(err => next(err))
// }

const index = async(req, res, next) => {
    const users = await User.find({})
        // throw new Error('Ranbom error!')
    return res.satus(200).json({ users })
}

// const newUser = (req, res, next) => {
// console.log('req.body content', req.body);
//create object model
// const newUser = new User(req.body)
//     console.log('newUser', newUser);
//     newUser.save((err, user) => {
//         console.error('Error', err);
//         console.log('User saved', user);
//         return res.status(201).json({ user })
//     })
// }

// const newUser = (req, res, next) => {
//     console.log('req.body content', req.body);
//     //create object model
//     const newUser = new User(req.body)
//     console.log('newUser', newUser);
//     newUser.save().then(user => {   
//         return res.status(201).json({ user })
//     }).catch(err => next(err))
// }

const newUser = async(req, res, next) => {
    const newUser = new User(req.body)
    await newUser.save()
    return res.status(201).json({ user: newUser })
}

module.exports = {
    // getAll:index
    index,
    newUser,
    // getUser
}