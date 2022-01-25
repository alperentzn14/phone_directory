const db = require('../models')


// create main Model
const User = db.users
const Directory = db.directories

// main work

// 1. create Users

const addUser = async (req, res) => {

    let info = {
        Name: req.body.Name,
        Surname: req.body.Surname,
        Company: req.body.Company,
        Phone_Number:req.body.Phone_Number,
        published: req.body.published ? req.body.published : false
    }

    const user = await User.create(info)
    res.status(200).send(user)
    console.log(user)

}



// 2. get all users

const getAllUsers = async (req, res) => {

    let users = await User.findAll({})
    res.status(200).send(users)

}

// 3. get single users

const getOneUser = async (req, res) => {

    let id = req.params.id
    let user = await User.findOne({ where: { id: id }})
    res.status(200).send(user)

}

// 4. update users

const updateUser = async (req, res) => {

    let id = req.params.id

    const user = await User.update(req.body, { where: { id: id }})

    res.status(200).send(user)
   

}

// 5. delete users by id

const deleteUser = async (req, res) => {

    let id = req.params.id
    
    await User.destroy({ where: { id: id }} )

    res.status(200).send('User is deleted !')

}

// 6. get published users

const getPublishedUser = async (req, res) => {

    const users =  await User.findAll({ where: { published: true }})

    res.status(200).send(users)

}

// 7. connect one to many relation users and directory

const getUserDirectories =  async (req, res) => {

    const id = req.params.id

    const data = await User.findOne({
        include: [{
            model: Directory,
            as: 'directory'
        }],
        where: { id: id }
    })

    res.status(200).send(data)

}

// Search for gigs
/*router.get('/search', (req, res) => {
    let { term } = req.query;
  
    // Make lowercase
    term = term.toLowerCase();
  
    Gig.findAll({ where: { technologies: { [Op.like]: '%' + term + '%' } } })
      .then(gigs => res.render('gigs', { gigs }))
      .catch(err => res.render('error', {error: err}));
  });*/

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    getPublishedUser,
    getUserDirectories
    
}