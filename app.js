const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const mongoClient = require('mongoose')

// setup connect mongodb by mongoose
mongoClient.connect('mongodb://localhost/nodejsapistarter', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('connected database from mongodb'))
    .catch((error) => console.error(`error connect database is failed with error which is ${error}`))

const app = express()

const usersRoute = require('./routes/user')

//Middlewares
app.use(logger('dev'))
app.use(bodyParser.json())

//Routes
app.use('/users', usersRoute)

//Routes
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: 'Serve is OK!'
    })
})

//Catch 404 Errors and forward them to error handler
app.use((rep, res, next) => {
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})

//Error handle function
app.use((err, req, res, next) => {
    // @ts-ignore
    const error = app.get('env') === 'development' ? err : {}
        // @ts-ignore
    const status = err.status || 500
        //response to clien
        // @ts-ignore
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})

//Start the server
const port = app.get('port') || 3000
app.listen(port, () => console.log(`Server is listening on port ${port}`))