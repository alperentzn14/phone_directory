const { directories } = require('../models')
const db = require('../models')

// model
const Directory = db.directories

// functions

//1. Add Directory

const addDirectory = async (req, res) => {

    const id = req.params.id

    let data = {
        directory_id: id,
        directory_name: req.body.directory_name,
        directory_Surname: req.body.directory_Surname,
        directory_phone_number:req.body.directory_phone_number,
        user_id:req.body.user_id
    }

    const review = await Directory.create(data)
    res.status(200).send(review)

}

// 2. Get All Directory

const getAllDirectories = async (req, res) => {

    const directories = await Directory.findAll({})
    res.status(200).send(directories)

}

module.exports = {
    addDirectory,
    getAllDirectories
}