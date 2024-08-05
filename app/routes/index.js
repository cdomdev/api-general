import express from "express";
const router = express.Router();
import fs from 'fs'

const path = `${__dirname}`

const removeExtension = (fileName) => {
    return fileName.split('.').shift()
}

export const routes = fs.readFileSync(path).filter((file) => {
    const fileName = removeExtension(file)
    const skip = ['index'].includes(fileName)
    if (!skip) {
        router.use(`${fileName}`, require(`./${fileName}`))
        console.log('---> ', fileName)
    }

})

router.get('*', (req, res) =>{
    res.status(404).json({
        message: 'Route not found'
    })
})

// module.exports = router

